import React , {useState} from "react";



export default function Textform(props) {
    const handlUpClick = ()=>{
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleOnChange = (e)=>{
        // console.log("Onchahe");
        setText(e.target.value)
    }
    const handlDownClick = ()=>{
        let newText = text.toLowerCase()
        setText(newText)
    }
    const camelChange = (e)=>{
        let cameText = ''
        for(let i=1;i<=text.length;i++){
           
            if(i%2===0){
               cameText +=  text.charAt(i).toUpperCase() 
            }
            else {
                cameText +=  text.charAt(i).toLowerCase() 
            }
           
        }
        setText( cameText)
    }


    // Remove extra spaces

    const handleExtraSpace = ()=>{
      let newText= text.split(/[ ]+/)
      setText(newText.join(" "));
    }

    const handleText = ()=>{
      var text = document.getElementById("myBox")
      text.select();
      text.setSelectionRange(0,9999);
      navigator.clipboard.writeText(text.value)
    }
    const [text , setText ] = useState("Enter the text here");
    // text = "New text"
    useState("New Text");
    return (
        <>
    <div>
      <h2 className={`form-label text-${(props.mode)==='light'?'dark':'light'}`} >{props.heading}</h2>
      <div className="mb-3">
        <label htmlFor="myBox" className={`form-label text-${(props.mode)==='dark'?'light':'#042743'}`} >
          Example textarea
        </label>
        <textarea
          style={{backgroundColor:(props.mode)==='dark'?'grey':'light' , color:(props.mode)==='light'?'black':'white'}}
          className="form-control"
          onChange={handleOnChange}
          id="myBox"
          rows="10" value={text}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handlUpClick}>
        Convert To Uppercase
      </button>
      <button className="btn btn-primary mx-2 " onClick={handlDownClick}>
        Convert To Lowercase
      </button>
      <button className="btn btn-primary mx-2 " onClick={camelChange}>
        Convert To AsDfGhJkL
      </button>
      <button className="btn btn-primary mx-2 " onClick={handleText}>
        Copy
      </button>
      <button className="btn btn-primary mx-2 " onClick={handleExtraSpace}>
      handleExtraSpace 
      </button>
    </div>
    <h3 className={`text-${(props.mode)==='light'?'dark':'light'}`}>The summary of your text is here:</h3>
    <p className={`text-${(props.mode)==='light'?'dark':'light'}`}>{text.split(" ").length } words and {text.length} charachters</p>
    <p className={`text-${(props.mode)==='light'?'dark':'light'}`} >{0.008 * text.split(" ").length } seconds to read</p>

    <h3 className={`text-${(props.mode)==='light'?'dark':'light'}`}>Text Preview</h3>
    <p className={`text-${(props.mode)==='light'?'dark':'light'}`}>{text}</p>
    </>
  );
}
