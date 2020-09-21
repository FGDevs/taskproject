export const API_URL= 'http://localhost:4001';

export const dateFormatter=(n)=>{
    var date = new Date(n);
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0');
    var yyyy = date.getFullYear();
  
    date = mm + '/' + dd + '/' + yyyy;
    return date
}

export const dateeditFormatter=(n)=>{
    var date = new Date(n);
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0');
    var yyyy = date.getFullYear();
  
    date = yyyy + '-' + mm + '-' + dd;
    return date
}

export const priceFormatter = (number) =>{
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(number)
  }