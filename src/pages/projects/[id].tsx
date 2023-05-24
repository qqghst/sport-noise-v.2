// import React from 'react';

// import { ProjectsRouting } from '@/data/projects-routing';
// import ProjectRoutePage from '@/components/project/projectRoutePage';

// interface ProjectsProps {
//     contact: any;
// }

// export const getServerSideProps = async (context: any) => {
//     const { id } = context.params;

//     const data = ProjectsRouting.find((c) => c.id === parseInt(id));

//     return {
//         props: { contact: data },
//     };
// };

// const Contact: React.FC<ProjectsProps> = ({ contact }) => {
//     return (
//         <>
//             <ProjectRoutePage contact={contact} />
//         </>
//     );
// };

// export default Contact;

import React from 'react';

import { ProjectsRouting } from '@/data/projects-routing';
import ProjectRoutePage from '@/components/projects-routing/projectRoutePage';

interface ProjectsProps {
    routingprojects: any;
}

export const getStaticPaths = async () => {
    const paths = ProjectsRouting.map((c) => ({
        params: { id: c.id.toString() },
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async (context: any) => {
    const { id } = context.params;

    const data = ProjectsRouting.find((c) => c.id === parseInt(id));

    return {
        props: { routingprojects: data },
    };
};

const Contact: React.FC<ProjectsProps> = ({ routingprojects }) => {
    return (
        <>
            <ProjectRoutePage routingprojects={routingprojects} />
        </>
    );
};

export default Contact;
