<script>
        document.addEventListener("DOMContentLoaded", function () {
            // Geçerli sayfa yolları (Buraya ekleme yapabilirsin)
            const validRoutes = ["/", "/index.html"];

            // Şu anki URL yolunu al
            const currentPath = window.location.pathname;

            // Eğer mevcut değilse, 404.html sayfasına yönlendir
            if (!validRoutes.includes(currentPath)) {
                window.location.href = "/404.html";  // 404 sayfasına yönlendir
            }
        });
    </script>