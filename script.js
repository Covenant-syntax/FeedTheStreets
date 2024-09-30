// custom js 

            // Our sponsors

           

            // mobile menu

                function toggleMenu() {
                const hamburger = document.querySelector('.hamburger');
                const menu = document.getElementById("menu");
                if (menu.style.width === "0px" || menu.style.width === "") {
                    openMenu();
                } else {
                    closeMenu();
                }
               
                hamburger.classList.toggle("change");
            }

            function openMenu() {
                
                document.getElementById("menu").style.width = "100%";
                document.body.style.overflow = "hidden"; // Disable scrolling

                const hamburger = document.querySelector('.hamburger');
                hamburger.classList.remove("change");
            }

            function closeMenu() {
                document.getElementById("menu").style.width = "0";
                document.body.style.marginRight = "0"; // Reset content position
                document.body.style.overflow = "auto"; // Re-enable scrolling

                const hamburger = document.querySelector('.hamburger');
                hamburger.classList.add("change"); // Ensure the hamburger menu returns to its original state
            }

            function closeLinkMenu(){
                document.getElementById("menu").style.width = "0";
                document.body.style.marginRight = "0"; // Reset content position
                document.body.style.overflow = "auto"; // Re-enable scrolling

                const hamburger = document.querySelector('.hamburger');
                hamburger.classList.remove("change"); // Ensure the hamburger menu returns to its original stat
            }
            // Automatically close the menu after clicking a link
            document.querySelectorAll('.menu-link').forEach(link => {
                link.addEventListener('click', closeLinkMenu);
            }); 
          

                        // Show/Hide the Back-to-Top Button
            window.onscroll = function() {
                const backToTopBtn = document.getElementById("backToTopBtn");
                let navbar = document.getElementsByTagName("nav")[0];
                if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                    backToTopBtn.style.display = "block";
                } else {
                    backToTopBtn.style.display = "none";
                }
                        // Add shadow when the page is scrolled down
                if (window.pageYOffset > 0) {
                    navbar.classList.add("shadow");
                } else {
                    navbar.classList.remove("shadow");
                }
            };

            // Scroll to the top of the page
            function scrollToTop() {
                document.body.scrollTop = 0; // For Safari
                document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
            }



            // read more
            function readMore() {
            var dots = document.getElementById("dots");
            var moreText = document.getElementById("more-text");
            var btnText = document.querySelector(".read-more-btn");

                if (dots.style.display === "none") {
                    dots.style.display = "inline";
                    btnText.innerHTML = "Read More";
                    moreText.style.display = "none";
                } else {
                    dots.style.display = "none";
                    btnText.innerHTML = "Read Less";
                    moreText.style.display = "inline";
                }
            }
            // gallery
            document.getElementById("see-more-btn").addEventListener("click", function() {
            const hiddenRows = document.querySelectorAll(".gallery-row.hidden");
                if (hiddenRows.length > 0) {
                    hiddenRows[0].classList.remove("hidden");
                    if (hiddenRows.length === 1) {
                        this.style.display = 'none'; // Hide the button if no more rows are hidden
                    }
                }
            });

            const galleryItems = document.querySelectorAll(".gallery-item img");
            const modal = document.getElementById("modal");
            const modalImg = document.getElementById("expanded-img");

            galleryItems.forEach(item => {
                item.addEventListener("click", function() {
                    modal.style.display = "block";
                    modalImg.src = this.src;
                    document.querySelectorAll(".gallery-item img").forEach(img => {
                        if (img !== this) {
                            img.classList.add("blur");
                        }
                    });
                });
            });

            document.querySelector(".close").addEventListener("click", function() {
                modal.style.display = "none";
                document.querySelectorAll(".gallery-item img").forEach(img => {
                    img.classList.remove("blur");
                });
            });

                //scoll-up animation on load
                    document.addEventListener("DOMContentLoaded", function() {
            let scrollElements = document.querySelectorAll(".scroll-element");

            function elementInView(el, offset = 0) {
                let elementTop = el.getBoundingClientRect().top;

                return (
                    elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset
                );
            }

            function displayScrollElement() {
                scrollElements.forEach((el) => {
                    if (elementInView(el, 150)) {
                        el.classList.add("in-view");
                    } else {
                        el.classList.remove("in-view");
                    }
                })
            }

            window.addEventListener("scroll", () => {
                displayScrollElement();
            });

            // Trigger animation on page load
            displayScrollElement();
        });

            //Form clear submit
            
    const form = document.getElementById('contact-clear');
    const successMessage = document.getElementById('form-success-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        const formData = new FormData(form);

        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                // Clear the form fields
                form.reset();
                
                // Show the custom success message
                successMessage.style.display = 'block';

                // Optionally, hide the success message after a few seconds
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 5000); // Hide after 5 seconds
            } else {
                alert('Oops! There was a problem submitting your form.');
            }
        }).catch(error => {
            console.error('Form submission error:', error);
            alert('There was a problem submitting your form.');
        });
    });


                // Get the modal
            var donateModal = document.getElementById("donationModal");

        // Get the button that opens the modal
        var btn = document.getElementById("donateBtn");
        var backHome = document.querySelector(".go-back-btn");

        backHome.onclick = function(){
            donateModal.style.display = "none"
        }

        // When the user clicks the button, open the modal 
        btn.onclick = function() {
            donateModal.style.display = "block";
        };

            
        
        
