import { Button } from "@chakra-ui/react"
import Link from "next/link"
import Cabezal from "../components/Cabezal"
export default function trabajos() {
    return(
        <div>
            <Cabezal />
            <Link href="/cursos/tecnologiasweb">
                <Button>Tecnologias web</Button>
            </Link>


        </div>
    )
}