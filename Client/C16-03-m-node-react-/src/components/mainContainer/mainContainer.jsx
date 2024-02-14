
import TextLanding from "../textLanding/TextLanding"
import Logo from "../logo/Logo"
import LandingImage from "../landingImage/Image"
import TextInput from "../textInput/TextInput"
import Button from "../button/Button"
// import Rating from "../rating/Rating"

function MainContainer() {
    return (
        <main className="w-full h-[100vh] flex justify-between items-center bg-purple flex-wrap">
            <header className="w-full p-[25px] flex justify-between items-center">
                <Logo />
                <Button text="Clientes" bgcolor="bg-green" />
            </header>
            <section className="w-full sm:flex sm:flex-row flex flex-col p-[25px] gap-2 justify-between items-center ">
                <div>
                    <TextLanding />
                </div>
                <div>

                <LandingImage />
                </div>
            </section>
            <section className="w-full p-[25px] gap-3 flex  items-center">
                <TextInput />
                <Button text="buscar" />
            </section>
            {/* <footer>
                <Rating/>
            </footer> */}
        </main>
    );
}

export default MainContainer;