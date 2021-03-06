
By adding those 2 lines in your html page, you will be able to select images
displayed by pressing the key 's' (as select). A black border should appear arround
the selected image. Press again on 's' to unselect.
You can clear the current selection by pressing 'c' (as clear).

On the bottom right, you have a compare icon (2 sheets with arrow) that
allows you to open a new window with all selected images for a more detailled comparison work.
From this new window called "My images comparison", you have again at the bottom
right a slider to choose the number of columns of the display (from 1 to 8).
By moving this slider, you will instantaneously change the layout of images.

Selection of images
![Selection of images](compareCompanion_01.png)

Comparison window with selected images
![Comparison window](compareCompanion_02.png)

Only 2 lines to be added.
```HTML
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.2.0/require.min.js"></script>
<script type="text/javascript" src="https://cdn.rawgit.com/PBrockmann/compareCompanion/master/compareCompanion.js"></script>
```

Test from http://htmlpreview.github.io/?https://raw.githubusercontent.com/PBrockmann/compareCompanion/master/atlas.html

Note, that the code is set to work with the src attribute of img tag but there are already 
3 lines prepared to work with the href attribute of parent anchor of any images of your 
html page.

<hr>
2 working methods explored:
- callback to wait load of jquery and jquery.ui
- callback to wait load of requirejs with dependancies on jquery and jquery.ui


