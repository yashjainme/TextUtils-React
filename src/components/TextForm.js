import React, {useState} from 'react'



export default function TextForm(props) {

    

    function WordCount() {
        return text.split(/\s+/)
               .filter(function(n) { return n !== ''})
               .length;
        
   }






    const [text, setText] = useState("Enter text here");
    let preview = document.getElementById("preview");








    
    const handleUpClick = () =>{
        
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted To UpperCase", "success")
    }
    const handleLoClick = () =>{
        
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted To LowerCase", "success")
    }

    const handleClearClick = () =>{
        
        let newText = "";
        setText(newText)
    }
    const handleSaveClick = () =>{

        
        localStorage.setItem('Notes', text)
        props.showAlert("Your Data Saved", "success")
    }
    
    const handleClearPreviewClick = () =>{
        

        preview.innerHTML = '*****No Saved Text is Rendered Now*****';
        
        
    }




    
    const handleOnChange = (event) =>{
        setText(event.target.value)
    }


    const handlePreviewClick = () =>{
        
        
       
            let data = localStorage.getItem('Notes')
            
            preview.innerHTML = data;
        
    
        }

    const handleCopy = () =>{
        
        
       
            navigator.clipboard.writeText(text)
            props.showAlert('Copied to clipboard', 'success')
        
    
        }

    
    
    
    return (

        props.mode && <>
        <div>

        <div className="mb-3">
            <h1>{props.heading}</h1>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode === 'dark'?'#0f172a':'white', color: props.mode === 'dark'?'white':'black'}}></textarea>
        </div>
            <button disabled={text.length===0} className="btn btn-dark mx-1 " onClick={handleUpClick}>Convert to UpperCase</button>
            <button disabled={text.length===0} className="btn btn-dark mx-1 " onClick={handleLoClick}>Convert to LowerCase</button>
            <button disabled={text.length===0} className="btn btn-dark mx-1 " onClick={handleCopy}>Copy</button>
            <button disabled={text.length===0} className="btn btn-dark mx-1 " onClick={handleSaveClick}>Save Text for Future Use</button>



            <button disabled={text.length===0} className="btn btn-dark mx-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-dark mx-1" onClick={handlePreviewClick}>View Saved Text</button>
            <button disabled={text.length===0} className="btn btn-dark mx-1" onClick={handleClearPreviewClick}>Clear Saved Text</button>
        </div>
        <div className="container my-3" >
            <h2> Your Text Summary</h2>
            <p>{WordCount()} words {text.length} characters </p>
            <p>{0.008 * WordCount()} Minutes Read</p>

            <h2>Preview</h2>
            <p>{text}</p>
        </div>

        <div className="card" >
  
  <div className="card-body" style={{backgroundColor: props.mode === 'dark'?'#0f172a':'white', color: props.mode === 'dark'?'white':'black'}}>
    <h5 className="card-title">Your Saved Texts</h5>
    <p id="preview">*****No Saved Text is Rendered Now*****</p>
    
  </div>
</div>





        </>


    )

   
}
