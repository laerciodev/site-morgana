import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby'
import styled from 'styled-components'

const WrapperMenu = styled.nav`
    background-color: red;
    clear: both
`

const ItemMenu = styled(Link)`
    color: #000;
    text-decoration: none;
`

const Menu = () => (
    <StaticQuery
        query={graphql`
        {
            allWordpressWpApiMenusMenusItems {
              edges {
                node {
                  items {
                    title
                    object_slug
                  }
                }
              }
            }
          }          
        `}
        render={props => (
        <>
         <WrapperMenu>
                    <ul>    
                        { props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
                            <li>
                                <ItemMenu to={ item.object_slug } key={ item.title }>
                                    { item.title }
                                </ItemMenu>
                            </li>
                        )) }
                    </ul>
                </WrapperMenu> */}
            </>
        )}
    />
);

export default Menu;