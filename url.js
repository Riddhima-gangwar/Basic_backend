import {URL} from 'url';
const someurl= new URL('http://localhost:3000/?id=10&name=laptop')
console.log(someurl);
console.log(someurl.hostname);
console.log(someurl.searchParams.get('id'));

