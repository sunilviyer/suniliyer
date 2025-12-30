/**
 * @jest-environment jsdom
 */

import {
  calculateFLIP,
  animateExpansion,
  animateCollapse,
  type Position,
  type FLIPData,
  type AnimationOptions,
} from '../animations';

describe('animations', () => {
  let testElement: HTMLElement;

  beforeEach(() => {
    // Create a test DOM element
    testElement = document.createElement('div');
    document.body.appendChild(testElement);

    // Mock requestAnimationFrame
    jest.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => {
      cb(0);
      return 0;
    });

    // Mock matchMedia for prefers-reduced-motion tests
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  afterEach(() => {
    // Clean up
    document.body.removeChild(testElement);
    jest.restoreAllMocks();
  });

  describe('calculateFLIP', () => {
    it('should calculate correct delta values', () => {
      const first: Position = { x: 100, y: 100, width: 200, height: 300 };
      const last: Position = { x: 150, y: 120, width: 400, height: 600 };

      const flip = calculateFLIP(first, last);

      expect(flip.deltaX).toBe(-50); // 100 - 150
      expect(flip.deltaY).toBe(-20); // 100 - 120
      expect(flip.deltaWidth).toBe(-200); // 200 - 400
      expect(flip.deltaHeight).toBe(-300); // 300 - 600
    });

    it('should calculate correct scale values', () => {
      const first: Position = { x: 100, y: 100, width: 200, height: 300 };
      const last: Position = { x: 150, y: 120, width: 400, height: 600 };

      const flip = calculateFLIP(first, last);

      expect(flip.scaleX).toBe(0.5); // 200 / 400
      expect(flip.scaleY).toBe(0.5); // 300 / 600
    });

    it('should handle same size elements (no scaling)', () => {
      const first: Position = { x: 100, y: 100, width: 200, height: 300 };
      const last: Position = { x: 150, y: 120, width: 200, height: 300 };

      const flip = calculateFLIP(first, last);

      expect(flip.scaleX).toBe(1); // 200 / 200
      expect(flip.scaleY).toBe(1); // 300 / 300
    });

    it('should handle zero position elements', () => {
      const first: Position = { x: 0, y: 0, width: 100, height: 100 };
      const last: Position = { x: 0, y: 0, width: 200, height: 200 };

      const flip = calculateFLIP(first, last);

      expect(flip.deltaX).toBe(0);
      expect(flip.deltaY).toBe(0);
      expect(flip.scaleX).toBe(0.5);
      expect(flip.scaleY).toBe(0.5);
    });

    it('should handle zero-width final element (edge case)', () => {
      const first: Position = { x: 100, y: 100, width: 200, height: 300 };
      const last: Position = { x: 150, y: 120, width: 0, height: 600 };

      const flip = calculateFLIP(first, last);

      expect(flip.scaleX).toBe(1); // Defaults to 1 to avoid Infinity
      expect(flip.scaleY).toBe(0.5);
    });

    it('should handle zero-height final element (edge case)', () => {
      const first: Position = { x: 100, y: 100, width: 200, height: 300 };
      const last: Position = { x: 150, y: 120, width: 400, height: 0 };

      const flip = calculateFLIP(first, last);

      expect(flip.scaleX).toBe(0.5);
      expect(flip.scaleY).toBe(1); // Defaults to 1 to avoid Infinity
    });
  });

  describe('animateExpansion', () => {
    it('should apply transform and opacity styles', () => {
      const flipData: FLIPData = {
        deltaX: -50,
        deltaY: -20,
        deltaWidth: -200,
        deltaHeight: -300,
        scaleX: 0.5,
        scaleY: 0.5,
      };

      animateExpansion(testElement, flipData);

      // After animation starts, element should have transition
      expect(testElement.style.transition).toContain('transform');
      expect(testElement.style.transition).toContain('opacity');
    });

    it('should use default duration and easing', () => {
      const flipData: FLIPData = {
        deltaX: -50,
        deltaY: -20,
        deltaWidth: -200,
        deltaHeight: -300,
        scaleX: 0.5,
        scaleY: 0.5,
      };

      animateExpansion(testElement, flipData);

      expect(testElement.style.transition).toContain('250ms');
      expect(testElement.style.transition).toContain('cubic-bezier(0.4, 0.0, 0.2, 1)');
    });

    it('should accept custom duration and easing', () => {
      const flipData: FLIPData = {
        deltaX: -50,
        deltaY: -20,
        deltaWidth: -200,
        deltaHeight: -300,
        scaleX: 0.5,
        scaleY: 0.5,
      };

      const options: AnimationOptions = {
        duration: 500,
        easing: 'ease-in-out',
      };

      animateExpansion(testElement, flipData, options);

      expect(testElement.style.transition).toContain('500ms');
      expect(testElement.style.transition).toContain('ease-in-out');
    });

    it('should call onComplete callback after animation', (done) => {
      const flipData: FLIPData = {
        deltaX: -50,
        deltaY: -20,
        deltaWidth: -200,
        deltaHeight: -300,
        scaleX: 0.5,
        scaleY: 0.5,
      };

      const options: AnimationOptions = {
        duration: 50,
        easing: 'linear',
        onComplete: () => {
          expect(true).toBe(true);
          done();
        },
      };

      animateExpansion(testElement, flipData, options);
    });

    it('should skip animation if prefers-reduced-motion', () => {
      // Mock prefers-reduced-motion: reduce
      (window.matchMedia as jest.Mock).mockImplementation((query: string) => ({
        matches: query === '(prefers-reduced-motion: reduce)',
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }));

      const flipData: FLIPData = {
        deltaX: -50,
        deltaY: -20,
        deltaWidth: -200,
        deltaHeight: -300,
        scaleX: 0.5,
        scaleY: 0.5,
      };

      const onCompleteMock = jest.fn();
      animateExpansion(testElement, flipData, { duration: 250, easing: 'linear', onComplete: onCompleteMock });

      // Should not have transition
      expect(testElement.style.transition).toBe('');
      // Should call onComplete immediately
      expect(onCompleteMock).toHaveBeenCalled();
    });
  });

  describe('animateCollapse', () => {
    it('should apply transform and opacity styles', () => {
      const flipData: FLIPData = {
        deltaX: -50,
        deltaY: -20,
        deltaWidth: -200,
        deltaHeight: -300,
        scaleX: 0.5,
        scaleY: 0.5,
      };

      animateCollapse(testElement, flipData);

      expect(testElement.style.transition).toContain('transform');
      expect(testElement.style.transition).toContain('opacity');
    });

    it('should use default duration of 150ms', () => {
      const flipData: FLIPData = {
        deltaX: -50,
        deltaY: -20,
        deltaWidth: -200,
        deltaHeight: -300,
        scaleX: 0.5,
        scaleY: 0.5,
      };

      animateCollapse(testElement, flipData);

      expect(testElement.style.transition).toContain('150ms');
    });

    it('should set opacity to 0 for collapse', () => {
      const flipData: FLIPData = {
        deltaX: -50,
        deltaY: -20,
        deltaWidth: -200,
        deltaHeight: -300,
        scaleX: 0.5,
        scaleY: 0.5,
      };

      animateCollapse(testElement, flipData);

      expect(testElement.style.opacity).toBe('0');
    });

    it('should call onComplete callback after animation', (done) => {
      const flipData: FLIPData = {
        deltaX: -50,
        deltaY: -20,
        deltaWidth: -200,
        deltaHeight: -300,
        scaleX: 0.5,
        scaleY: 0.5,
      };

      const options: AnimationOptions = {
        duration: 50,
        easing: 'linear',
        onComplete: () => {
          expect(true).toBe(true);
          done();
        },
      };

      animateCollapse(testElement, flipData, options);
    });

    it('should skip animation if prefers-reduced-motion', () => {
      // Mock prefers-reduced-motion: reduce
      (window.matchMedia as jest.Mock).mockImplementation((query: string) => ({
        matches: query === '(prefers-reduced-motion: reduce)',
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }));

      const flipData: FLIPData = {
        deltaX: -50,
        deltaY: -20,
        deltaWidth: -200,
        deltaHeight: -300,
        scaleX: 0.5,
        scaleY: 0.5,
      };

      const onCompleteMock = jest.fn();
      animateCollapse(testElement, flipData, { duration: 150, easing: 'linear', onComplete: onCompleteMock });

      // Should call onComplete immediately
      expect(onCompleteMock).toHaveBeenCalled();
    });
  });

  describe('TypeScript type exports', () => {
    it('should export Position interface', () => {
      const position: Position = { x: 0, y: 0, width: 100, height: 100 };
      expect(position).toBeDefined();
    });

    it('should export FLIPData interface', () => {
      const flipData: FLIPData = {
        deltaX: 0,
        deltaY: 0,
        deltaWidth: 0,
        deltaHeight: 0,
        scaleX: 1,
        scaleY: 1,
      };
      expect(flipData).toBeDefined();
    });

    it('should export AnimationOptions interface', () => {
      const options: AnimationOptions = {
        duration: 250,
        easing: 'ease',
        onComplete: () => {},
      };
      expect(options).toBeDefined();
    });
  });
});
