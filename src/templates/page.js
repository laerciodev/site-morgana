import React from 'react';
import Layout from '../components/layout';
import Caroulsel from '../components/Carousel/Carousel';

export default ({ pageContext }) => (
    <Layout>
        {/* <h1 dangerouslySetInnerHTML={{__html: pageContext.title }}></h1> */}
        <Caroulsel />
    </Layout>
)
