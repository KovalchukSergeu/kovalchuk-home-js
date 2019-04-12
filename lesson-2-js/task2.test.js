// ----------------- 1.40 ----------------------------------
describe('check the arithmetic operation of the sum', () => {
  it('check addition of integers', () => {
    expect(1 + 2).toBe(3);
  });
  it('check floating-point addition', () => {
    expect(0.1 + 0.2).toBeCloseTo(0.3);
  });
});
describe('check the arithmetic operation of the subtraction', () => {
  it('сheck the subtraction of integers', () => {
    expect(4 - 2).toBe(2);
  });
  it('check floating-point addition', () =>  {
    expect(0.5 - 0.3).toBeCloseTo(0.2);
  });
});
describe('check the arithmetic operation of the Multiplication', () => {
  it('сheck the multiplication of integers', () => {
    expect(4 * 2).toBe(8);
  });
  it('check floating-point addition', () => {
    expect(0.2 * 0.2).toBeCloseTo(0.04);
  });
});
describe('Check arithmetic division operation', () => {
  it('Check the division of integers', () => {
    expect(6 / 3).toBe(2);
  });
  it('check floating point division', () => {
    expect(0.6 / 0.3).toBeCloseTo(2);
  });
});

// --------------------------- 1.45 -------------------------

let a = 1, b = 2, c = 3, d = 4, e = 5, f = 6, g = 7, h = 8, x = 3;
describe('arithmetic operation', () => {
  it('pre-decrement', () => {
    expect(--a).toBe(0);
  });
  it('preincrement', () => {
    expect(++b).toBe(3);
  });
  it('postdecrement', () => {
    expect(c--).toBe(3);
  });
  it('post-increment', () => {
    expect(d++).toBe(4);
  });
  it('addition assignment', () => {
    expect(e+=x).toBe(8);
  });
  it('assignment with subtraction', () => {
    expect(g-=x).toBe(4);
  });it('multiplication assignment', () => {
    expect(h*=x).toBe(24);
  });it('division assignment', () => {
    expect(f/=x).toBe(2);
  });
});

// --------------------------- 1.60 -------------------------
let z = 3, y = z > 4;
describe('Comparison operations and logical operations', () => {
  it('less', () => {
    expect(2 < 3).toBe(true);
    expect(2 < 1).toBe(false);
  });
  it('more', () => {
    expect(3 > 1).toBe(true);
    expect(3 > 4).toBe(false);
  });
  it('less or equal', () => {
    expect(3 <= 4).toBe(true);
    expect(3 <= 3).toBe(true);
    expect(3 <= 2).toBe(false);
  });
  it('more or equal', () => {
    expect(3 >= 2).toBe(true);
    expect(4 >= 4).toBe(true);
    expect(5 >= 6).toBe(false);
  });
  it('equal', () => {
    expect(4 === 4).toBe(true);
    expect(5 === 4).toBe(false);
  });
  it('not equal', () => {
    expect(2 !== 3).toBe(true);
    expect(3 !== 3).toBe(false);
  });
  it('logical and', () => {
    expect(2 > 1 && 3 === 3).toBe(true);
    expect(3 === 3 && 2 > 3).toBe(false);
  });
  it('logical or', () => {
    expect(2 > 3 || 3 === 3).toBe(true);
    expect(2 === 3 || 2 > 6).toBe(false);
  });
  it('logical not', () => {
    expect(!y).toBe(true);
  });
});

// --------------------------- 1.60 -------------------------
let w = '2.1', r = '2.1', t = '2.1', s = '2.1', j = parseFloat('sss');
describe('type conversion and validation', () => {
  it('parseInt', () => {
    expect(parseInt('-5')).toBe(-5);
  });
  it('parseFloat', () => {
    expect(parseFloat('-3.8')).toBe(-3.8);
  });
  it('number', () => {
    expect(Number('-3.8')).toBe(-3.8);
  });
  it('function rules', () => {
    expect(w * 1).toBe(2.1);
    expect(r / 1).toBe(2.1);
    expect(t - 0).toBe(2.1);
    expect(+s).toBe(2.1);
  });
  it('isNaN', () => {
    expect(isNaN(j)).toBe(true);
  });
});