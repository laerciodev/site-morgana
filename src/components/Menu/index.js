import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby'
import './styles.css'

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
         <nav className='container-menu'>
              <ul class='list-menu'>    
                  { props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
                      <li className='item-menu'>
                          <Link className='link-menu' to={ item.object_slug } key={ item.title }>
                              { item.title }
                          </Link>
                      </li>
                  )) }
              </ul>
            </nav>
            </>
        )}
    />
);

export default Menu;