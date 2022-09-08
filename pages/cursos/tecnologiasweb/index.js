import Cabezal from "../../../components/Cabezal";
import Link from "next/link";
import { Button } from "@chakra-ui/react";

export default function tecnologiasweb() {
    return (
        <div>
            <Cabezal />
            <Link href="/cursos/tecnologiasweb/eva1">
               <Button>Autoevaluacion 1</Button> 
            </Link>
        </div>
    )

}