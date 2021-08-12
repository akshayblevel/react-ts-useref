import React from 'react';

export function InputForm() {
  
  const inputRef = React.useRef<HTMLInputElement>(null);
    React.useEffect(()=>{
        inputRef.current?.focus();
    },[]);
  
  return (
    <>
      <form>
        <div>
          <label htmlFor="inputservice">Service</label>
          <input
          ref={inputRef}
            name="service"
            id="inputservice"
            className="form-control"
            required
            
          />
        </div>
        <div>
          <label htmlFor="inputoperator">Operator</label>
          <input
            name="operator"
            id="inputoperator"
            className="form-control"
            required
            
          />
        </div>
        <div>
          <label htmlFor="inputvalue">Value</label>
          <input
            name="value"
            id="inputvalue"
            className="form-control"
            required
            
          />
        </div>
        <div>
          <label htmlFor="inputmobile">Mobile</label>
          <input
            name="mobile"
            id="inputmobile"
            className="form-control"
            required
           
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
