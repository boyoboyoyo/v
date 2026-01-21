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
        <a class="postTitle2" href="{{ post.url }}">{{ post.icon }} {{ post.title }}</a>
    </div>
    <div class="postCon">
        <div class="blogpost-body">
            {% if post.excerpt %}
            <p>{{ post.excerpt }}</p>
            <p style="margin-top: 15px;"><a href="{{ post.url }}" style="color: #409EFF; font-weight: bold;">→ Read Article</a></p>
            {% endif %}
        </div>
    </div>
</div>
{% endfor %}
