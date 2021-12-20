import { If, Then, Else } from 'react-if';

const Card = ({dog}) => {
    return (
        <div>
       
            <If condition={dog === 'undefined' }>
              <Then>
                Empty 
             </Then>
                <Else>

             <img width="80%" height="80%" src={"https://cdn2.thedogapi.com/images/" + dog.reference_image_id + ".jpg" }  alt="Dogs"></img>

               </Else>
             </If>
           <p>
                Raza : {dog.name}
            </p>
            <p>
                Duracion : {dog.life_span}
            </p>
        </div>
    )
}

export default Card
