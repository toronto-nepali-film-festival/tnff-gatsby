import React from "react";
import Header from "../components/header";
import Layout from "../components/layout";

export default function About() {
    return (
        <Layout>
            <Header headerText="About TNFF" />
            <p>Toronto Nepali Film Festival (TNFF) is a not for profit organization based in Toronto, Ontario. Partnering with organizations in Canada, Nepal and beyond, TNFF brings a festival of extraordinary Nepali films in Toronto and other cities. By featuring films of South Asia, specifically Nepal, TNFF intends to add a fresh dimension to the multi-layered diasporic narratives of Canada.
            </p>
            <p>
                The festival features films that pertain to Nepal, and is open to both Nepali and non-Nepali filmmakers. The festival showcases all genres of films including feature length films, documentaries, animation, experimental, and shorts. The festival encourages diversity in the overall content of its program by encouraging representation of women filmmakers, filmmakers from indigenous nationalities and other marginalized communities.
            </p>
            <p>
                All participating films are paid an honorarium.
            </p>
            <h3>Programming Committee Selection Criteria</h3>
            <p>
                The Curatorial Committee of TNFF selects films based on merit and the content of the films. The committee will consider relevant Nepali narratives, methods of story-telling, new genres in the context of Nepali filmmaking, technical finesse and other attributes of filmmaking in the jury process. The committee also takes into consideration TNFF’s mandate of inclusion of marginalized groups in the film programming.
            </p>
        </Layout>
    )
}