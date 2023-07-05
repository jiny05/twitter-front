import { useRecoilState } from "recoil";
import { jwtState, userEmailState } from "..";



function LoadOnStart() {
    const [jwt, setJwt] = useRecoilState(jwtState);
    const [userEmail, setUserEail] = useRecoilState(userEmailState);
    console.log("loadOnStart...");

    if (sessionStorage.getItem("authToken"))
        setJwt(sessionStorage.getItem("authToken"));

    if (sessionStorage.getItem("authUserEmail"))
        setUserEail(sessionStorage.getItem("authUserEmail"));

    return (<>
    </>);
}

export default LoadOnStart;