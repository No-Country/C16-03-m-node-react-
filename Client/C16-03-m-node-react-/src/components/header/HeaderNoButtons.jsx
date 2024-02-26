import Logo from "../logo/Logo";

function HeaderNoButtons() {
    return (
        <div className="flex items-center w-full h-[104px] bg-bgDashboard rounded-[24px] ">
            <div className="min-w-80 max-w-screen-lg  w-full">
                <div className=" flex items-center p-4 justify-between w-full">
                    <Logo />

                </div>
            </div>
        </div>
    );
}

export default HeaderNoButtons;
