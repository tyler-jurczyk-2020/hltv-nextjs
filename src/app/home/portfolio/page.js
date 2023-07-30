export default async function Team() {
    const data = await fetch('http://localhost:3000/home/api', {cache: 'no-store'})
    const my_data = await data.json();
    console.log(data);
return (<div></div>)

}  
