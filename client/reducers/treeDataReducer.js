import React, { Component } from 'react';
import { tree, hierarchy } from 'd3'
import Nodes from '../components/Nodes';
import Links from '../components/Links';

function treeDataReducer(state = [], action) {
  switch(action.type) {
    case 'LOAD_TREE_DATA':
      const d3Tree = tree().size([500, 500])(hierarchy(action.payload))
      let nodes = d3Tree.descendants()
      return [nodeRender(nodes), linkRender(d3Tree,nodes)]
    default:
      return state;
  }
}

function nodeRender(nodes) {
  console.log('inside Node Render')
  const allTheNodes = [];
      nodes.map(function (d, i) {
        return (allTheNodes.push(<Nodes
        xtranslate={d.x}
        ytranslate={d.y}
        key={i}
        name={d.data.name}
        props={d.data.props}
        state={d.data.state}
      />)) 
      })
  return allTheNodes
}

function linkRender(d3Tree,nodes){
      console.log('inside Link Render')
      const linksArr = d3Tree.links(nodes);
      const allTheLinks = []
      linksArr.map(function (link, index) {
        return (allTheLinks.push(<Links datum={link} key={index} />))
      })

      return allTheLinks
}   

export default treeDataReducer;