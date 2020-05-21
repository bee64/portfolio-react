import * as React from "react";

export interface AboutProps { colorMode: string }

export const About = (props: AboutProps) => <section className={'about ' + props.colorMode}>
    Hi, I'm Brad! I'm a Web focused Software Developer working mostly with Angular 7 / AngularJS and Spring Boot. You'll likely find me in the kitchen, out for a run, doing some impromptu yoga, or gaming in my free time.    
</section>