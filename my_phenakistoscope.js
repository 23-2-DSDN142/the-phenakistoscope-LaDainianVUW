const SLICE_COUNT = 10;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(true);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("Deadpool" , "png");
  pScope.load_image("Wolverine" , "png");
  
}

function setup_layers(pScope){

  new PLayer(null, 7, 6, 8);  //lets us draw the whole circle background, ignoring the boundaries

 var layer1 = new PLayer(Wolverine);
layer1.mode( SWIRL(4));
  layer1.set_boundary( 0,1000 );
 

 
 var layer2 = new PLayer(Deadpool);
  layer2.mode( RING );
  layer2.set_boundary( 0, 400 );
}

function Wolverine(x, y, animation, pScope){
  pScope.draw_image("Wolverine",x,y);
  scale(5)
}

function Deadpool(x, y, animation, pScope){
  pScope.draw_image("Deadpool",x,y)
  
  
}
