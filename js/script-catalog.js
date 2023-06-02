function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.product');
for (let elm of elements) {
  observer.observe(elm);
}





// document.addEventListener('DOMContentLoaded', function () {
//   const filterButtons = document.querySelectorAll('.filter-button');
//   const products = document.querySelectorAll('.product');

//   filterButtons.forEach(function (button) {
//     button.addEventListener('click', function () {
//       const filterValue = button.getAttribute('data-filter');


//       if (filterValue === 'all') {
//         products.forEach(function (product) {
//           product.style.display = 'block';
//         });
//       }
//       else {
//         products.forEach(function (product) {
          
//           const category = product.getAttribute('data-category');
//           if (category === filterValue) {
//             product.style.display = 'block';
//           } else {
//             product.style.display = 'none';
//           }
//         });
//       }
//     });
//   });
// });



$(document).ready(function() {
  $('.filter-button').click(function() {
    var filterValue = $(this).attr('data-filter');
    var products = $('.product');

    if (filterValue === 'all') {
      products.show();
    } else {
      products.each(function() {
        var category = $(this).attr('data-category');
        if (category === filterValue) {
          $(this).show();
        } else {
          $(this).hide();
        }
      });
    }
  });
});



document.getElementById("open-modal-btn-13").addEventListener('click', function(){
  document.getElementById("product-modal-13").classList.add("open")
})


document.getElementById("close-modal-btn-13").addEventListener('click', function(){
  document.getElementById("product-modal-13").classList.remove("open");
})



document.getElementById("open-modal-btn-4").addEventListener('click', function(){
  document.getElementById("product-modal-4").classList.add("open")
})

document.getElementById("close-modal-btn-4").addEventListener('click', function(){
  document.getElementById("product-modal-4").classList.remove("open");
})



document.getElementById("open-modal-btn-0").addEventListener('click', function(){
  document.getElementById("product-modal-0").classList.add("open")
})

document.getElementById("close-modal-btn-0").addEventListener('click', function(){
  document.getElementById("product-modal-0").classList.remove("open");
})


// document.getElementById("open-modal-btn-1").addEventListener('click', function(){
//   document.getElementById("product-modal-1").classList.add("open")
// })

// document.getElementById("close-modal-btn-1").addEventListener('click', function(){
//   document.getElementById("product-modal-1").classList.remove("open");
// });




// document.getElementById("open-modal-btn-2").addEventListener('click', function(){
//   document.getElementById("product-modal-2").classList.add("open")
// })

// document.getElementById("close-modal-btn-2").addEventListener('click', function(){
//   document.getElementById("product-modal-2").classList.remove("open");
// });


// document.getElementById("open-modal-btn-3").addEventListener('click', function(){
//   document.getElementById("product-modal-3").classList.add("open")
// })

// document.getElementById("close-modal-btn-3").addEventListener('click', function(){
//   document.getElementById("product-modal-3").classList.remove("open");
// });








// modalCloses.forEach(function(close) {
//   close.addEventListener('click', function() {
//     const modal = this.closest('.modal');
//     modal.classList.remove("open")
//   });
// });




// document.addEventListener('DOMContentLoaded', function() {
//   const modalTriggers = document.querySelectorAll('.modal-trigger');
//   const modals = document.querySelectorAll('.myModal');
//   const modalCloses = document.querySelectorAll('.modal-close');

//   // Open modal when a triggering element is clicked
//   modalTriggers.forEach(  function(trigger) {
//     trigger.addEventListener('click', function() {
//       const modalId = this.getAttribute('data-modal-id');
//       const modal = document.getElementById(modalId);
//       modal.classList.add("open")
//     });
//   });

//   // Close modal when the close button is clicked
//   modalCloses.forEach(function(close) {
//     close.addEventListener('click', function() {
//       const modal = this.closest('.modal');
//       modal.style.display = 'none';
//     });
//   });

//   // Close modal when clicking outside the modal content
//   modals.forEach(function(modal) {
//     modal.addEventListener('click', function(event) {
//       if (event.target === this) {
//         this.style.display = 'none';
//       }
//     });
//   });
// });



// $('.add-to-cart-btn').click(function() {
//   var productId = $(this).closest('.card-img-top').data('id');
//   var productElement = $(this).closest('.card-img-top');

//   flyToCart(productElement, productId);
// });


// function flyToCart(productElement, productId) {
//   var cartPosition = $('#cart-icon').offset();
//   var buttonPosition = productElement.find('.add-to-cart-btn').offset();

//   // Create a clone of the product element and position it at the button position
//   var productClone = productElement.clone();
//   productClone.css({
//     'position': 'absolute',
//     'top': $('.add-to-cart-btn').offset()['top'],
//     'left':  $('.add-to-cart-btn').offset()['left'],
//     'z-index': 9999
//   });
//   $('body').append(productClone);

//   // Animate the clone to fly towards the cart position
//   productClone.animate({
//     'top': $('#cart-icon').offset()['top'],
//     'left':$('#cart-icon').offset()['left'],
//     'opacity': 0.5
//   }, 1000, function() {
//     // Animation complete, remove the clone and perform any other desired actions (e.g., add the product to the cart)
//     productClone.remove();
//   });
// }



let count = 0;

$('.add-to-cart-btn').on('click', function(){
  let cart = $('.cart-icon');

  let imgtodrag = $(this).closest('.product').find('img').eq(0);
  if(imgtodrag.length) {
    var imgclone = imgtodrag.clone().offset({
      top: imgtodrag.offset().top,
      left: imgtodrag.offset().left
    }).css({
      'opacity': '0.8',
      'position': 'absolute',
      'height': '150px',
      'width': '150px',
      'z-index': '100'
    }).appendTo($('body')).animate({
      'top': cart.offset().top + 20,
      'left': cart.offset().left + 30,
      'width': 75,
      'height': 75
    }, 1000, function() {
      setTimeout(function(){
        count++;
        $(".cart-icon .item-count").text(count);
      }, 1500);
  
      imgclone.animate({
        'width': 0,
        'height': 0
      }, function(){
        $(this).detach();
      });

    });

  }
});