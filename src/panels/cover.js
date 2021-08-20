
import React from 'react';
import '../scss/main.scss';
import '../panels/cover.css';

function Cover(){
    return (
        <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
            <header class="mb-auto">
                <div>
                <h3 class="float-md-start mb-0">AI+love+shcool</h3>
                <nav class="nav nav-masthead justify-content-center float-md-end">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    <a class="nav-link" href="#">Features</a>
                    <a class="nav-link" href="#">Contact</a>
                </nav>
                </div>
            </header>            
            <main class="px-3">
                <h1 class="py-3">AI들의 신기방기 학습공간</h1>
                <p class="lead py-3">AI들과 다른 공간에서의 학교생활을 즐겨 보세요. AI들의 마음을 사로잡아 나만의 AI를 육성하고 누군가에게 자랑하는 기회를 가져보세요.</p>
                <p class="lead">
                <a href="#" class="btn btn-lg btn-secondary fw-bold border-white bg-white">시작하기</a>
                </p>
            </main>

            <footer class="mt-auto text-white-50">
                <p>Cover template for <a href="https://getbootstrap.com/" class="text-white">Bootstrap</a>, by <a href="https://twitter.com/mdo" class="text-white">@mdo</a>.</p>
            </footer>        
        </div>
    )
}

export default Cover;