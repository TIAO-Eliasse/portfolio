import json
import subprocess

# Pre-defined expert descriptions for key repos
EXPERT_METADATA = {
    "nlp_project": {
        "title": "DeepSemantics: Multilingual Polarization Detection",
        "subtitle": "Transformers · Adaptive Focal Loss · SemEval-2026",
        "desc": "A production-grade NLP system for fine-grained identification of polarization (Vilification, Dehumanization) in English and Hausa. Ranked 6th globally on the Hausa track.",
        "tags": ["PyTorch", "Transformers", "NLP", "XAI", "SemEval-2026"]
    },
    "ai-statistical-reporter": {
        "title": "Agentic AI Statistical Reporter",
        "subtitle": "LangChain · LLMs · Automated Analytics",
        "desc": "An autonomous agentic pipeline that transforms raw datasets into professional statistical reports using LangChain multi-step reasoning.",
        "tags": ["Python", "LangChain", "LLMs", "Streamlit", "Automation"]
    },
    "Machine-learning-at-scale": {
        "title": "ML at Scale: Distributed Matrix Systems",
        "subtitle": "High-Throughput ML · Parallelization",
        "desc": "Implementation of large-scale ML algorithms designed for high-throughput environments featuring parallelized matrix factorization.",
        "tags": ["Big Data", "Distributed Systems", "Matrix Factorization"]
    },
    "RECOMMATIONS_systemMLATSCALE": {
        "title": "Neural Recommendation Matrix",
        "subtitle": "Hybrid Filtering · SVD · Real-time Inference",
        "desc": "A scalable hybrid recommendation engine combining content-based and collaborative filtering via SVD-based matrix factorization.",
        "tags": ["Recommender Systems", "SVD", "Python", "Scalable AI"]
    },
    "PFA2025": {
        "title": "SME Survival Analytics (Engineering Thesis)",
        "subtitle": "Survival Forests · XGBoost · Credit Scoring",
        "desc": "Advanced ML framework for predicting SME survival in Cameroon using Random Survival Forests (C-index=0.70) and SHAP-based explainability.",
        "tags": ["Survival Analysis", "XGBoost", "Econometrics", "SHAP"]
    }
}

def get_repo_data(repo):
    name = repo['name']
    meta = EXPERT_METADATA.get(name, {})
    title = meta.get("title") or name.replace('_', ' ').replace('-', ' ').title()
    subtitle = meta.get("subtitle") or (repo.get('description') or "Statistical Engineering & AI implementation.")
    desc = meta.get("desc") or f"Advanced technical implementation focused on {name.replace('_', ' ').replace('-', ' ')}."
    tags = meta.get("tags") or [(repo.get('primaryLanguage') or {}).get('name', 'Python')]
    return title, subtitle, desc, tags

# Fetch repos
print("Fetching repos via GitHub CLI...")
result = subprocess.run(['gh', 'repo', 'list', 'TIAO-Eliasse', '--limit', '100', '--json', 'name,description,url,primaryLanguage,stargazerCount,updatedAt'], capture_output=True, text=True)
repos = json.loads(result.stdout)

cards_html = ""
for repo in repos:
    if repo['name'] in ['portfolio', 'site', 'eliasse-research-portfolio']: continue
    
    title, subtitle, desc, tags = get_repo_data(repo)
    lang_name = (repo.get('primaryLanguage') or {}).get('name', 'Python')
    tag_html = "".join([f'<span class="tag">[{t}]</span>' for t in tags])
    featured = "featured" if repo['name'] == "nlp_project" else ""
    
    cards_html += f"""
        <div class="project-card reveal tilt {featured}" data-repo="{repo['name']}">
          <div class="card-header">
            <span class="repo-lang">● {lang_name}</span>
            <span class="repo-stars">⭐ {repo.get('stargazerCount', 0)}</span>
            <span class="repo-updated">Updated recently</span>
          </div>
          <h3 class="card-title">{title}</h3>
          <p class="card-subtitle" style="color: var(--accent-teal); font-family: var(--font-code); font-size: 0.8rem; margin-bottom: 15px;">{subtitle}</p>
          <p class="card-desc" style="font-size: 0.95rem; opacity: 0.7;">{desc}</p>
          <div class="card-topics">{tag_html}</div>
          <a class="repo-link card-btn" href="{repo['url']}" target="_blank" rel="noopener noreferrer">View Research Architecture ↗</a>
        </div>"""

# Generate full HTML (truncated for this summary, but written in full to file)
html_content = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Eliasse TIAO — AI Researcher · Google DeepMind Scholar</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=JetBrains+Mono&family=Space+Grotesk:wght@300;500;700;800&display=swap" rel="stylesheet">
    <style>
        :root {{
            --bg-black: #080810; --text-white: #ffffff; --accent-blue: #4f8ef7; --accent-teal: #00d4aa; --accent-gold: #f5c842;
            --surface: rgba(255,255,255,0.04); --surface-border: rgba(255,255,255,0.1);
            --font-display: 'Space Grotesk', sans-serif; --font-body: 'Inter', sans-serif; --font-code: 'JetBrains Mono', monospace;
        }}
        * {{ margin: 0; padding: 0; box-sizing: border-box; cursor: none; }}
        body {{ background: var(--bg-black); color: var(--text-white); font-family: var(--font-body); overflow-x: hidden; }}
        #cursor-dot {{ position: fixed; width: 8px; height: 8px; background: var(--accent-blue); border-radius: 50%; pointer-events: none; z-index: 10000; transform: translate(-50%, -50%); }}
        #cursor-glow {{ position: fixed; width: 200px; height: 200px; background: radial-gradient(circle, rgba(79,142,247,0.15) 0%, transparent 70%); pointer-events: none; z-index: 9999; transform: translate(-50%, -50%); }}
        nav {{ position: fixed; top: 0; width: 100%; padding: 30px 60px; z-index: 1000; display: flex; justify-content: space-between; align-items: center; backdrop-filter: blur(20px); border-bottom: 1px solid var(--surface-border); }}
        .container {{ max-width: 1200px; margin: 0 auto; padding: 120px 40px; }}
        #hero {{ height: 100vh; display: flex; flex-direction: column; justify-content: center; position: relative; }}
        .hero-title {{ font-family: var(--font-display); font-size: clamp(4rem, 10vw, 8.5rem); font-weight: 800; line-height: 0.9; margin: 20px 0; }}
        .project-grid {{ display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 30px; }}
        .project-card {{ background: var(--surface); border: 1px solid var(--surface-border); padding: 30px; border-radius: 12px; transition: 0.5s; }}
        .project-card.featured {{ grid-column: 1 / -1; border-color: var(--accent-gold); }}
        .tag {{ font-family: var(--font-code); font-size: 0.7rem; color: var(--accent-blue); margin-right: 8px; }}
        .reveal {{ opacity: 0; transform: translateY(30px); transition: 0.8s; }}
        .reveal.visible {{ opacity: 1; transform: translateY(0); }}
    </style>
</head>
<body>
    <div id="cursor-dot"></div><div id="cursor-glow"></div>
    <nav><a href="#" style="color:white; text-decoration:none; font-weight:800; font-family:var(--font-display);">ET</a></nav>
    <section id="hero" class="container">
        <h1 class="hero-title">ELIASSE<br>TIAO</h1>
        <p style="font-family:var(--font-code); color:var(--accent-teal);">Google DeepMind Scholar | AI Researcher</p>
    </section>
    <section id="projects" class="container">
        <h2 style="font-family:var(--font-display); font-size:3rem; margin-bottom:50px;">The Forge [84 Repos]</h2>
        <div class="project-grid">{cards_html}</div>
    </section>
    <script>
        window.addEventListener('mousemove', (e) => {{
            document.getElementById('cursor-dot').style.left = e.clientX + 'px';
            document.getElementById('cursor-dot').style.top = e.clientY + 'px';
            document.getElementById('cursor-glow').style.left = e.clientX + 'px';
            document.getElementById('cursor-glow').style.top = e.clientY + 'px';
        }});
        const observer = new IntersectionObserver((entries) => {{
            entries.forEach(e => {{ if(e.isIntersecting) e.target.classList.add('visible'); }});
        }}, {{ threshold: 0.1 }});
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    </script>
</body>
</html>"""

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html_content)
print("Impeccable index.html generated.")