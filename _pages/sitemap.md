---
layout: archive
title: "Sitemap"
permalink: /sitemap/
author_profile: true
sitemap: false
---

{% include base_path %}

A list of public pages on the site. For robots, an [XML version]({{ base_path }}/sitemap.xml) is available as well.

<h2>Pages</h2>
{% assign visible_pages = site.pages | where: "sitemap", true | sort: "title" %}
{% for post in visible_pages %}
  {% unless post.published == false or post.hidden == true %}
  {% include archive-single.html %}
  {% endunless %}
{% endfor %}

{% assign visible_posts = site.posts | where: "sitemap", true %}
{% if visible_posts.size > 0 %}
<h2>Posts</h2>
{% for post in visible_posts %}
  {% unless post.published == false or post.hidden == true %}
  {% include archive-single.html %}
  {% endunless %}
{% endfor %}
{% endif %}

{% for collection in site.collections %}
{% unless collection.output == false or collection.label == "posts" %}
  {% assign visible_docs = collection.docs | where: "sitemap", true %}
  {% if visible_docs.size > 0 %}
  <h2>{{ collection.label }}</h2>
  {% for post in visible_docs %}
    {% unless post.published == false or post.hidden == true %}
  {% include archive-single.html %}
    {% endunless %}
  {% endfor %}
  {% endif %}
{% endunless %}
{% endfor %}
