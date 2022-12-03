// write your CatList component here
export default function CatList({catPics}){
    return(
    <>
    {catPics.map((pic,ind)=><img key={ind} src={pic} alt="cat"/>)
    }</>
        );
}