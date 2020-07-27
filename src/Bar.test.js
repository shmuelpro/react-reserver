import React from 'react'
import Bar from './Bar'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import {
    toBeInTheDocument,
    toHaveStyle,
  } from '@testing-library/jest-dom/matchers'
  
  expect.extend({toBeInTheDocument, toHaveStyle})


test('Bar props changes color ', () => {
    render(<Bar dimension="20" background="red" />)
    
    expect(screen.getByRole("listitem")).toHaveStyle("background:rgb(14, 107, 168)")
   
    //screen.getByText('1')
   
})

test('onClick event fires',()=>{
    const onClick = jest.fn();
    render(<Bar dimension="20" onClick={ onClick } />)
    fireEvent.click(screen.getByRole("listitem"))

    expect(onClick).toHaveBeenCalled();
})

test('onContextMenu event fires',()=>{
    const onClick = jest.fn();
    render(<Bar style={{pointerEvents:"auto"}} dimension="20" onContextMenu={ onClick  } />)
    fireEvent.contextMenu(screen.getByRole("listitem"))
    
    expect(onClick).toHaveBeenCalled();
})

test('onMouseOver event fires',()=>{
    const onClick = jest.fn();
    render(<Bar style={{pointerEvents:"auto"}} dimension="20" onMouseOver={ onClick  } />)
    fireEvent.mouseOver(screen.getByRole("listitem"))
    
    expect(onClick).toHaveBeenCalled();
})

test('should have default onDragStart', () => {
    expect(Bar.defaultProps.onDragStart).toBeDefined();
 });
 

 test('should have default onClick', () => {
    expect(Bar.defaultProps.onClick).toBeDefined();
 });
 






