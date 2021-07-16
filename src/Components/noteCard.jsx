export function NoteCard({data, cardclass}){
    let t = new Date(data.timestamp * 1000);
    let months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    let year = t.getFullYear();
    let month = months[t.getMonth()];
    let date = t.getDate();
    let time = `${month} ${date} de ${year}`;

    return (
        <div className="notecard">
            <a href={data.url}>
                <img src={data.image} alt="" />
                <p className={`txt-left title ${cardclass}`}>{data.title}</p>
                <p className="txt-left date">{time}</p>
            </a>
        </div>
    )
}