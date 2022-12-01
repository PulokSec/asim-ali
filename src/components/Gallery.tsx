import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { gql } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const Gallery = () => {
    const [images, setImages] = useState([]);

      useEffect(() => {
        const client = new ApolloClient({
            uri: 'http://localhost:10004/graphql',
            cache: new InMemoryCache(),
          });
        client
        .query({
          query: gql`
          query{
            pages(where: {title: "home"}) {
              nodes {
                homeLandingPage {
                  gallery {
                    hideSection
                    galleryImage1 {
                      altText
                      sourceUrl
                    }
                    galleryImage2 {
                      altText
                      sourceUrl
                    }
                    galleryImage3 {
                      altText
                      sourceUrl
                    }
                    galleryImage4 {
                      altText
                      sourceUrl
                    }
                    galleryImage5 {
                      altText
                      sourceUrl
                    }
                   
                  }
                }
              }
            }
          }`,
        })
        .then((result) => setImages(result?.data?.pages?.nodes));
    }, []);
    
    
    const myLoader = ({ src, width, quality }) => {
      return `${src}?w=${width}&q=${quality || 75}`
    }
    return (
        <>
           <div className="gallery_section">
            {images.map( image => {
                return(
            <Container key={image}> 
            {image?.homeLandingPage?.gallery?.hideSection === true ? "" : (
                <Row className='gx-3'>
                    <Col> 
                    {image?.homeLandingPage?.gallery?.galleryImage1 == null ? "" : (
                     <Image 
                        src={image?.homeLandingPage?.gallery?.galleryImage1?.sourceUrl} 
                        alt={image?.homeLandingPage?.gallery?.galleryImage1?.altText} 
                        loader={myLoader}
                        width="100%" 
                        height="60" 
                        layout="responsive" 
                        objectFit="contain"
                        />
                    )}
                    
                    {image?.homeLandingPage?.gallery?.galleryImage2 == null ? "" : (
                        <Image 
                        src={image?.homeLandingPage?.gallery?.galleryImage2?.sourceUrl} 
                        alt={image?.homeLandingPage?.gallery?.galleryImage2?.altText} 
                        loader={myLoader}
                        width="100%" 
                        height="70" 
                        layout="responsive" 
                        objectFit="contain"
                         />
                        )}

                    </Col>
                    <Col> 
                    {image?.homeLandingPage?.gallery?.galleryImage3 == null ? "" : (
                        <Image 
                        src={image?.homeLandingPage?.gallery?.galleryImage3?.sourceUrl} 
                        alt={image?.homeLandingPage?.gallery?.galleryImage3?.altText} 
                        loader={myLoader} 
                        width="100%" 
                        height="138" 
                        layout="responsive" 
                        objectFit="contain"
                        />
                        )}
                    </Col>
                    <Col> 
                    {image?.homeLandingPage?.gallery?.galleryImage4 == null ? "" : (
                        <Image 
                        src={image?.homeLandingPage?.gallery?.galleryImage4?.sourceUrl} 
                        alt={image?.homeLandingPage?.gallery?.galleryImage4?.altText} 
                        loader={myLoader} 
                        width="100%" 
                        height="60" 
                        layout="responsive" 
                        objectFit="contain" />
                        )}

                        {image?.homeLandingPage?.gallery?.galleryImage5 == null ? "" : (
                        <Image 
                        src={image?.homeLandingPage?.gallery?.galleryImage5?.sourceUrl} 
                        alt={image?.homeLandingPage?.gallery?.galleryImage5?.altText} 
                        loader={myLoader} 
                        width="100%" 
                        height="70" 
                        layout="responsive" 
                        objectFit="contain" />
                        )}
                    </Col>
                </Row>
            )}

                
            </Container>
                )
            })} 
           
           </div>
        </>
    );
};

export default Gallery;