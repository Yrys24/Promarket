import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function BasicExample(props) {
    const e = props.data
    return (


        <Card style={{
            width: '18rem',
            position: 'relative',
            overflow: 'hidden',

        }}>
            {e.discount !== null ? <div style={{ color: 'wheat' }} className='rotete'>{e.discount + "%"} { }</div> : null}

            <div
                style={{
                    width: '100%',
                    height: 200,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundImage: ` url(https://api.office.promarket.besoft.kg/${e.main_image.path.original})`,
                }} />


            <Card.Body>
                <Card.Title>{e.title} </Card.Title>

                <Button style={{ marginBottom: '20px', width: '250px', }} variant="primary">  {e.discount === null ? e.price +  " Сом" : <>{e.price - (e.price * e.discount / 100 )  +  " Сом,"} <s>{e.price}  Сом</s></>}</Button>
            </Card.Body>
        </Card>

    );
}

export default BasicExample;