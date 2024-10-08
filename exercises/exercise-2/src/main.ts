// Exercise 2: Creating a simple triangle in WebGL

import { vec3 } from 'gl-matrix';

import { Mesh } from './mesh';
import { RenderManager } from './render-manager';

/**
 * Main function to set up WebGL and start the render loop.
 */
function main() {
  // Set up the WebGL context and canvas
  const canvas = new RenderManager(document.getElementById('webgl-canvas'));

  // Create a simple triangle mesh that we want to render.
  //
  // In 3D graphics, shapes are made up of points called vertices.
  // Here's what our triangle looks like:
  //
  //        (0.0, 0.5, 0.0)
  //              /\
  //             /  \
  //            /    \
  //           /      \
  //          /________\
  // (-0.5,-0.5,0.0)  (0.5,-0.5,0.0)
  //
  // Each vertex is represented by three numbers: (x, y, z)
  // In this 2D example, z is always 0.
  const triangle = new Mesh(canvas.gl, [
    // Top of the triangle
    vec3.fromValues(0, 0.5, 0),
    // Bottom left of the triangle
    vec3.fromValues(-0.5, -0.5, 0),
    // Bottom right of the triangle
    vec3.fromValues(0.5, -0.5, 0),
  ]);

  // Start rendering to the canvas every frame
  canvas.startRendering();
}

// Run the main function when the window loads
window.onload = main;
