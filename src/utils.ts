export function truncateText(text:string){
    const length=21;
    if(text.length<21) return text
return text.substring(0,length)+'...';
}