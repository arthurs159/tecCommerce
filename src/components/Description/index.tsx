import './styles.css';

type Props = {
  description: string;
}

const Description = ( { description }: Props) => {
       return (
              <div className="description-text-container">
              <div className="descrition-text">
                <p>
                  {(description)} 
                </p>
              </div>
            </div>
       );
};


export default Description;