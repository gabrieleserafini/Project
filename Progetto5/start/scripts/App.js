import { FileDoc } from "./FileDoc.js";
import { UserInterface } from "./UserInterface.js";
import{} from "../editor.js";
/*importa le due classi definite negli altri files*/
export class App{
    ui = new UserInterface();
    files = [];
    openFile = null;
    idFile = -1;

    /* costruttore: i dati sono presi dal file editor.js che contengono gli id dell'html, che istanzia una nuova app e 
    tramite il costruttore assegna i valori all'istanza di UserInterface  */
    constructor(_ui){ 

        this.ui = _ui;

        /*inizializza tinymce, passando il riferimento all html tramite la proprietà dell'oggetto*/
        tinymce.init({
            selector: `#${this.ui.editor}`
            });
        
        
        this.save = document.querySelector(`#${this.ui.save}`);
        this.title = document.querySelector(`#${this.ui.title}`);
        this.editor = document.querySelector(`#${this.ui.editor}`);
        this.file_list = document.querySelector(`#${this.ui.file}`);
        this.new = document.querySelector(`#${this.ui.new}`);
        /* chiamare il metodo che fa il bind dell'evento click */
        this.btnBind();
        /* chiamare il metodo che recupera i dati dal localStorage*/
        this.loadDocs();       
    }
   

    /*assegnare le proprietà dell'oggetto riferendosi al DOM e passando la proprietà dell'oggetto UserInterface come sopra*/
    
/* metodo che fa il bind sul click, attenzione all'uso di this*/
    btnBind(){
        this.save.addEventListener("click", this.newFile.bind(this));
        this.new.addEventListener("click", this.delete.bind(this));
    }

/* metodo che recupera i dati nel localStorage*/

    loadDocs(){
        if(localStorage.getItem("files")){
            this.files = JSON.parse(localStorage.getItem("files"));
            this.showFile();}
    }
       
    /* metodo che carica l'oggetto file */
    /* metodo che ripulisce */
    
    /* altro metodo: se non ci sono file caricati crea un oggetto file e fa il push nell'array */
    /* altrimenti modifica il file assegnando i valori letti dal form*/
    /* salva l'array nel localStorage e chiama la funzione che stampa a video*/
    // quando nei metodi dovrò usare tinymce.get(this.ui.editor) avrò  .getContent()

    newFile(){
        if(this.openFile == null){
            let file = new FileDoc();
            file.title = this.title.value;
            file.text = tinymce.get(this.ui.editor).getContent();
            this.files.push(file);
        }else{
            this.openFile.title = this.title.value;
            this.openFile.text = tinymce.get(this.ui.editor).getContent();
            this.files[this.idFile] = this.openFile;
        }
        localStorage.setItem("files", JSON.stringify(this.files));
        this.showFile();
        
    }

    /* metodo che stampa a video */
    showFile(){
        this.delete();
        this.file_list.innerHTML = "";
        this.files.forEach((el, index) => {
        this.file_list.innerHTML += (`<li data-id="${index}" class="list-group-item">${el.title}</li>`)

        });
        this.ind = this.dataset.index;
        console.log(ind);
        index.addEventListener('click',function(){
        this.openFile = new FileDoc(this.files[this.ind].title, this.files[this.ind].text);
        this.title.value =this.openFile.title;
        tinymce.get(this.ui.editor).setContent(this.openFile.text);
        } );
    }
    /* metodo che svuota il form */
    delete(){
        this.title.value = "";
        // quando nei metodi dovrò usare tinymce.get(this.ui.editor) avrò  .setContent() 
        tinymce.get(this.ui.editor).setContent('');
        this.openFile = null;
    }
}
