
const { INSTA_API } = process.env;

export async function getStaticProps(context) {

    const result = await fetch( INSTA_API, {
        method: "GET"
    });

    const data = await result.json();

    return {  props: { data }  };
}

export default function insta({data}) {
    //console.log(data.data[0])

    {data.data.map(d => {
        console.log(d)
        return( <p key={d.id}>{d.id}</p>)
    })}
    return(
        <ul>
            {data.data.map(d => {
                return( 
                    <li key={d.id}>
                        <img 
                            src={d.media_url} 
                            alt={d.username}
                            height= '500'
                            width= '500'
                        />
                    </li>
                )
            })}
        </ul>
    )
}