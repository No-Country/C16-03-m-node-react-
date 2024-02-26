import ImagePageNotFound from '../../assets/404.png'
import Button from '../button/button';

function PageNotFound() {
    return (
        <>
            <div className="h-screen w-screen p-4 min-w-[360px]">
                <div className='flex flex-col w-full h-full bg-Amethyst rounded-xl items-center justify-center'>
                    <img src={ImagePageNotFound} alt="404 Page not found" width={300} height={300}/>
                    <h2 className='my-3'>Página no encontrada</h2>
                    <Button text={"Volver a inicio"} to={"/"} className='mb-4'/>
                </div>

            </div>
        </>
    );
}

export default PageNotFound;