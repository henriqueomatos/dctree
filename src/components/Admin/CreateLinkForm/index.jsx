import { useState } from "react";
import GeneralForm from "../../GeneralForm";
import storage from "@/storage";

export default function CreateLinkForm(){

    const [label, setLabel] = useState();
    const [link, setLink] = useState();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

    //let productLinks = window.localStorage.getItem('account-links')
    //productLinks = JSON.parse(productLinks) ?? [];
    let productLinks = storage.getAccountLinks();
    
    // o código acima é o mesmo que este aqui:
    //productLinks = JSON.parse(productLinks) ? JSON.parse(productLinks) : [];

    console.log(productLinks);

    const handleSubmit = (event) => {        
        event.preventDefault() 
        
        productLinks.push({
          label,
          link,
          title,
          description
        });

        
        storage.setAccountLinks(productLinks);
       // window.localStorage.setItem('account-links', JSON.stringify(productLinks));       
       // window.localStorage.setItem('label', label);
      //  window.localStorage.setItem('link', link);
       // window.localStorage.setItem('title', title);
       // window.localStorage.setItem('description', description);

    }

    const updateLabelValue = (event) => {
      setLabel(event.target.value);
    }
    const updateLinkValue = (event) => {
      setLink(event.target.value);
    }
    const updateTitleValue = (event) => {
      setTitle(event.target.value);
    }
    const updateDescriptionValue = (event) => {
      setDescription(event.target.value);
    }

    return(
        <GeneralForm method="POST" onSubmit={handleSubmit}>
        
    <div className="mb-3">
        <label htmlFor="" className="form-label">Label</label>
        <input onChange={updateLabelValue} type="text" className="form-control"/>
      </div>

      <div className="mb-3">
        <label htmlFor="" className="form-label">Link</label>
        <input onChange={updateLinkValue} type="text" className="form-control"/>
      </div>

      <div className="mb-3">
        <label htmlFor="" className="form-label">Título</label>
        <input onChange={updateTitleValue} type="text" className="form-control"/>
      </div>

      <div className="mb-3">
        <label htmlFor="" className="form-label">Descrição</label>       
        <textarea onChange={updateDescriptionValue} className="form-control"></textarea>
      </div>

      <div>
        <button className="btn btn-dark w-100">Criar Link</button>
      </div>
        
      
        
        </GeneralForm>
    );
}