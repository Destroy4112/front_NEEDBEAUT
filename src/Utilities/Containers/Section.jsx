import React from 'react';

function Section(props) {
    return (
        <section className={props.clase}>
            {props.children}
        </section>
    );
}

export default Section;