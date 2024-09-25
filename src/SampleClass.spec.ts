import SampleClass from "./SampleClass";

describe("sampleClass",()=>{
  it('sample test', () => {
    const result = SampleClass.add(1,2);

    expect(result).toBe(3);
  });
})
