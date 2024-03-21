import Image from 'next/image';

export const Modal = ({image, name, toggleModal}: { image: string, name: string, toggleModal: () => void }) => (

    <div className="modal">
        <div className="modal-content">
            <span className="close" onClick={toggleModal}>&times;</span>
            <Image
                src={`/images${image}`}
                height={512}
                width={512}
                alt={""}
                priority
            />
            <p>{name}</p>
        </div>
    </div>

)
