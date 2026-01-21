---
layout: default
title: Home
---

<div class="day">
    <div class="dayTitle">
        <a id="articles">Articles</a>
    </div>
</div>

{% for post in site.posts %}
<div class="post">
    <div class="postTitle">
        <a class="postTitle2" href="{{ site.baseurl }}{{ post.url }}">{{ post.icon }} {{ post.title }}</a>
    </div>
    <div class="postCon">
        <div class="blogpost-body">
            <p>{{ post.excerpt | strip_html }}</p>
            <p style="margin-top: 15px;"><a href="{{ site.baseurl }}{{ post.url }}" style="color: #409EFF; font-weight: bold;">→ Read Article</a></p>
        </div>
    </div>
</div>
{% endfor %}
