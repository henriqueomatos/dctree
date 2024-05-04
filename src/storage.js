/*
Esse arquivo é genérico e será utilizado para quando precisar
colocar alguma "coisa" no localstorage
*/


export default {

    getItem(key){
       //return window.localStorage.getItem(key);
       let result = window.localStorage.getItem(key);
       return JSON.parse(result) ?? [];


    },

    setItem(key, value){
        value = JSON.stringify(value);
        return window.localStorage.setItem(key, value);
    },

    getAccountLinks(){
        //let productLinks = window.localStorage.getItem('account-links')
        //utilizei o this para utilizar a função getItem acima
        //let productLinks = this.getItem('account-links')
        //productLinks = JSON.parse(productLinks) ?? [];
        return this.getItem('account-links');
    },

    setAccountLinks(links){
        //window.localStorage.setItem('account-links', JSON.stringify(productLinks));
        this.setItem('account-links', links);
    },

    setUiStyle(data){
        this.setItem('ui-style', data);
    },

    

    getUiStyle(attribute, defaultValue) {
        let result = this.getItem('ui-style');

        if (attribute) {
            return result[attribute] ?? defaultValue
        }

        let uistyle = {};

        Object.entries(result).forEach(item => {
            let [key, value] = item;
        
            if(value === 0 || Number(value)) {
                value += 'px'
            }
        
            uistyle[key] = value
        })

        return uistyle;
    }
}