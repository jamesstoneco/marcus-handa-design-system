# The Grid

Please refer to the ZURB Foundation 6 documentation on the Flexbox grid.



#  Colors

The colors are shown below with their hex values for reference only. If using colors via CSS or Scss always default to the color variables shown.

## Brand Colors

The main colors used by the brand and design system.

<div class="row up-1 medium-up-3">
  <div class="column">
    <div class="color-block">
      <span style="background: #fa7252;"></span>
      $brand-primary: #fa7252;
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #ffffff;"></span>
      $brand-white: #ffffff;
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #000000;"></span>
      $brand-black: #000000;
    </div>
  </div>
</div>

## Text Colors

Colors of typography elements.


<div class="row up-1 medium-up-3">
  <div class="column">
    <div class="color-block">
      <span style="background: #828282;"></span>
      $text-body-copy: #828282;
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #565656;"></span>
      $text-headline: #565656;
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #aa9f9d;"></span>
      $text-subhead: #aa9f9d;
    </div>
  </div>
</div>

# UI Colors

Other colors used in the UI.

<div class="row up-1 medium-up-3">
  <div class="column">
    <div class="color-block">
      <span style="background: #f7f7f7;"></span>
      $ui-card-background-grey: #f7f7f7;
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #dcdcdc;"></span>
      $ui-outline-grey: #dcdcdc;
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #fbfbfd;"></span>
      $ui-section-grey: #fbfbfd;
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #d8d8d8;"></span>
      $ui-slider-bullet-grey: #d8d8d8;
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #acacac;"></span>
      $ui-shadow-color: #acacac;
    </div>
  </div>
</div>



# Scss Settings

```scss
// brand colors
$brand-primary: #fa7252;
$brand-white: #ffffff;
$brand-black: #000000;

// text colors
$text-body-copy: #828282;
$text-headline: #565656;
$text-subhead: #aa9f9d;

// ui colors
$ui-card-background-grey: #f7f7f7;
$ui-outline-grey: #dcdcdc;
$ui-section-grey: #fbfbfd;
$ui-slider-bullet-grey: #d8d8d8;
$ui-shadow-color: #acacac;

// ui shadow settings
$ui-shadow-opacity: 0.5;
$ui-shadow-blur: 24px;
$ui-shadow-offset-x: 6px;
$ui-shadow-offset-y: $ui-shadow-offset-x;

// fonts

$brand-font-body-copy: "proxima-nova", 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif;
$brand-font-headline: "brandon-grotesque", 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif;
$brand-font-button: $brand-font-headline;

// spacing vars

$brand-spacing-level-1: 50px;
$brand-spacing-level-2: $brand-spacing-level-1 * 2;
$brand-spacing-level-3: $brand-spacing-level-1 * 3;

$ui-radius: 4px;
$ui-radius-circle: 9999px;

```



# Typography

<h4>This design uses Brandon Grotesque for headings, subheads, and buttons.</h4>
<p>This design uses Proxima Nova for paragraph text.</p>

---

<h1>Heading Level 1</h1>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.

<h2>Heading Level 2</h2>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.

<h3>Heading Level 3</h3>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.

<h4>Heading Level 4</h4>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.

<h5>Heading Level 5</h5>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.

<h6>Heading Level 6</h6>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.



# Hero

Use this at the top of the page to create a nice formatted hero section. `&lt;strong&gt;` uses the `$brand-primary` color.

```html_example
<div class="hero">
  <h1 class="text-center">I Design Beautiful Solutions for <strong>Solopreneurs</strong>, <strong>Startups</strong> and <strong>Developers</strong></h1>
  <p>Let’s work together to bring your projects and idea’s to life!</p>
  <a href="#" class="button hollow">VIEW MY WORK</a>
</div>
```



# Section

Use this to create formatted sections that are white (no options) or with a `.background-grey`. Typically you will want to wrap your content in a grid

```html_example
<section>
  <p class="subhead">Why Hire a UI Designer</p>
  <hr class="short">
  <h2>A Stunning UI Will Elevate Your Business</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam eligendi illum officiis laudantium quod, at, optio sint neque earum similique, blanditiis dicta ut culpa. Officiis dicta nostrum nulla eum molestias.</p>
</section>

<section class="background-grey">
  <p class="subhead">Why Hire a UI Designer</p>
  <hr class="short">
  <h2>A Stunning UI Will Elevate Your Business</h2>
</section>
```



# Work Item

This is a hero style banner that places an app or site example that is cropped. This is typically used as a header. The image will expand as the viewport shrinks to show more of the example. A secondary class is required with `.app` or `.site` which changes the width of the image shown. Also note that the `.site` variant also has a drop shadow around the image.

## App Variant

```html_example
<div class="row">
  <div class="column">
    <div class="work-item-header app">
      <img src="http://www.placehold.it/429x735" alt="">
    </div>
  </div>
</div>
```

## Site Variant

```html_example
<div class="row">
  <div class="column">
    <div class="work-item-header site">
      <img src="http://www.placehold.it/574x700" alt="">
    </div>
  </div>
</div>
```



# Menu Colours

This provides a colored set of swatches. Please note that the color must be set by an inline style. This is to allow future CMS configuration of the color displayed.

```html_example
<h3>Main Colours</h3>
<ul class="menu menu-colors">
  <li><a style="background:#30ac9a;">green</a></li>
  <li><a style="background:#496276;">blue</a></li>
  <li><a style="background:#aa9f9d;">grey</a></li>
  <li><a style="background:#ffffff;">white</a></li>
</ul>
```



# Outcome Images

This gives a quick way to show outcomes in a work / case study page.

# Mobile App Example

```html_example
<div class="row">
  <div class="column"> <a class="outcome-screenshot" href=""><img src="http://www.placehold.it/426x758" alt=""></a> </div>
  <div class="column"> <a class="outcome-screenshot" href=""><img src="http://www.placehold.it/426x758" alt=""></a> </div>
  <div class="column"> <a class="outcome-screenshot" href=""><img src="http://www.placehold.it/426x758" alt=""></a> </div>
</div>

<div class="row align-center">
  <div class="column shrink">
    <a class="outcome-link" href="#">Click image to see larger version</a>
  </div>
</div>
```

# Site Example

```html_example
<div class="row align-center">
  <div class="column"> <a class="outcome-screenshot" href=""><img src="http://www.placehold.it/1162x1416" alt=""></a> </div>
</div>

<div class="row align-center">
  <div class="column shrink">
    <a class="outcome-link" href="#">Click image to see larger version</a>
  </div>
</div>
```



# Promo Block Work

```html_example
<div class="row">
  <div class="column promo-block-work">
    <a href="work-item-app.html"><img src="http://www.placehold.it/707x360" alt=""></a>
    <h3>Lorem</h3>
    <a href="work-item-app.html" class="button hollow">view case study</a>
  </div>
  <div class="column promo-block-work">
    <a href="work-item-app.html"><img src="http://www.placehold.it/707x360" alt=""></a>
    <h3>Lorem</h3>
    <a href="work-item-app.html" class="button hollow">view case study</a>
  </div>
  <div class="column promo-block-work">
    <a href="work-item-app.html"><img src="http://www.placehold.it/707x360" alt=""></a>
    <h3>Lorem</h3>
    <a href="work-item-app.html" class="button hollow">view case study</a>
  </div>
</div>
```



# Social Menu

A set of social menu icons.

```html_example
<nav class="social">
  <ul class="menu">
    <li><a href=""><img src="assets/img/icon-twitter.svg" alt=""></a></li>
    <li><a href=""><img src="assets/img/icon-twitter.svg" alt=""></a></li>
    <li><a href=""><img src="assets/img/icon-twitter.svg" alt=""></a></li>
    <li><a href=""><img src="assets/img/icon-twitter.svg" alt=""></a></li>
  </ul>
</nav>
```