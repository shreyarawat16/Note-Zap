export default function formatDate(date){
    return date.toLocaleSateString("en-US",{
        month:"short",
        day: "numeric",
        year: "numeric",
    } );
}