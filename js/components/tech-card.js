/**
 * 技术卡片组件
 * 动态生成技术卡片，支持二级菜单展开
 */

// 卡片组件类
class TechCard {
    constructor(tech, categoryColors, categoryNames) {
        this.tech = tech;
        this.color = categoryColors[tech.category] || categoryColors.basic;
        this.categoryName = categoryNames[tech.category] || '其他';
        this.expanded = false;
        this.detailMenu = null;
    }

    /**
     * 生成卡片HTML
     * @returns {string} 卡片HTML字符串
     */
    render() {
        const techTags = this.generateTechTags();
        const linkHTML = this.generateLinkHTML();
        const expandButton = this.generateExpandButton();

        return `
            <article class="tech-card" data-category="${this.tech.category}" style="--card-color: ${this.color}">
                <div class="card-header">
                    <span class="card-number">${this.tech.number}</span>
                    <span class="card-category">${this.categoryName}</span>
                </div>
                <h3 class="card-title">${this.tech.title}</h3>
                <p class="card-description">${this.tech.description}</p>
                <div class="card-techs">
                    ${techTags}
                </div>
                ${linkHTML}
                ${expandButton}
                <div class="tech-detail-menu" id="detail-menu-${this.tech.id}">
                    ${this.generateDetailMenuContent()}
                </div>
            </article>
        `;
    }

    /**
     * 生成技术标签
     * @returns {string} 技术标签HTML
     */
    generateTechTags() {
        return this.tech.techs.slice(0, 6).map(techName => {
            const detail = getTechDetail(techName);
            const hasDetail = detail.website || detail.detailPage;
            const clickableClass = hasDetail ? 'clickable' : '';
            const hasDetailClass = detail.detailPage ? 'has-detail' : '';
            
            return `<span class="tech-tag ${clickableClass} ${hasDetailClass}" 
                         data-tech="${techName}" 
                         title="${detail.description}"
                         ${hasDetail ? 'role="button" tabindex="0"' : ''}>
                        ${techName}
                    </span>`;
        }).join('');
    }

    /**
     * 生成链接HTML
     * @returns {string} 链接HTML
     */
    generateLinkHTML() {
        if (this.tech.link) {
            return `
                <a href="${this.tech.link}" target="_blank" rel="noopener noreferrer" class="card-link">
                    访问官网
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
                    </svg>
                </a>`;
        } else {
            return `<span class="card-link disabled">暂无官网</span>`;
        }
    }

    /**
     * 生成展开按钮
     * @returns {string} 展开按钮HTML
     */
    generateExpandButton() {
        if (this.tech.techs.length <= 6) {
            return ''; // 如果技术数量不超过6个，不显示展开按钮
        }

        return `
            <button class="expand-btn" data-tech-id="${this.tech.id}" aria-expanded="false">
                <span>查看全部 ${this.tech.techs.length} 项技术</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                </svg>
            </button>`;
    }

    /**
     * 生成二级菜单内容
     * @returns {string} 二级菜单HTML
     */
    generateDetailMenuContent() {
        if (this.tech.techs.length <= 6) {
            return ''; // 如果技术数量不超过6个，不生成二级菜单
        }

        const techItems = this.tech.techs.map((techName, index) => {
            const detail = getTechDetail(techName);
            const websiteLink = detail.website ? 
                `<a href="${detail.website}" target="_blank" rel="noopener noreferrer" class="tech-link">
                    官网
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clip-rule="evenodd" />
                        <path fill-rule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clip-rule="evenodd" />
                    </svg>
                </a>` : '';

            const detailLink = detail.detailPage ? 
                `<a href="${detail.detailPage}" class="tech-link detail-link">
                    详情
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                    </svg>
                </a>` : '';

            const hotBadge = detail.isHot ? '<span class="hot-badge">HOT</span>' : '';

            // 添加分隔线（除了第一个）
            const divider = index > 0 ? '<div class="tech-detail-divider"></div>' : '';

            return `
                ${divider}
                <div class="tech-detail-item" data-tech="${techName}">
                    <div class="tech-info">
                        <div class="tech-name">
                            ${techName}
                            ${hotBadge}
                        </div>
                        <div class="tech-description">${detail.description}</div>
                    </div>
                    <div class="tech-links">
                        ${websiteLink}
                        ${detailLink}
                        ${!websiteLink && !detailLink ? '<span class="tech-link disabled">暂无链接</span>' : ''}
                    </div>
                </div>
            `;
        }).join('');

        return techItems;
    }

    /**
     * 绑定事件监听器
     */
    bindEvents() {
        // 绑定展开按钮事件
        const expandBtn = document.querySelector(`[data-tech-id="${this.tech.id}"]`);
        if (expandBtn) {
            expandBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleDetailMenu();
            });
        }

        // 绑定技术标签点击事件（只绑定当前卡片内的标签）
        const detailMenu = document.getElementById(`detail-menu-${this.tech.id}`);
        const currentCard = detailMenu ? detailMenu.closest('.tech-card') : null;
        const techTags = currentCard ? currentCard.querySelectorAll('.tech-tag.clickable') : [];
        techTags.forEach(tag => {
            tag.addEventListener('click', (e) => {
                e.stopPropagation();
                const techName = tag.dataset.tech;
                this.handleTechTagClick(techName);
            });

            // 键盘事件
            tag.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const techName = tag.dataset.tech;
                    this.handleTechTagClick(techName);
                }
            });
        });

        // 绑定二级菜单项点击事件
        const detailItems = document.querySelectorAll(`#detail-menu-${this.tech.id} .tech-detail-item`);
        detailItems.forEach(item => {
            item.addEventListener('click', (e) => {
                const techName = item.dataset.tech;
                this.handleDetailItemClick(techName);
            });
        });
    }

    /**
     * 切换二级菜单显示状态
     */
    toggleDetailMenu() {
        const menu = document.getElementById(`detail-menu-${this.tech.id}`);
        const expandBtn = document.querySelector(`[data-tech-id="${this.tech.id}"]`);
        
        if (!menu) return;

        this.expanded = !this.expanded;
        
        if (this.expanded) {
            menu.classList.add('active');
            expandBtn.classList.add('expanded');
            expandBtn.setAttribute('aria-expanded', 'true');
            expandBtn.querySelector('span').textContent = '收起技术列表';
        } else {
            menu.classList.remove('active');
            expandBtn.classList.remove('expanded');
            expandBtn.setAttribute('aria-expanded', 'false');
            expandBtn.querySelector('span').textContent = `查看全部 ${this.tech.techs.length} 项技术`;
        }
    }

    /**
     * 处理技术标签点击
     * @param {string} techName - 技术名称
     */
    handleTechTagClick(techName) {
        const detail = getTechDetail(techName);
        
        if (detail.detailPage) {
            // 如果有详情页，跳转到详情页
            window.location.href = detail.detailPage;
        } else if (detail.website) {
            // 如果有官网，打开官网
            window.open(detail.website, '_blank', 'noopener,noreferrer');
        }
    }

    /**
     * 处理二级菜单项点击
     * @param {string} techName - 技术名称
     */
    handleDetailItemClick(techName) {
        const detail = getTechDetail(techName);
        
        if (detail.detailPage) {
            window.location.href = detail.detailPage;
        } else if (detail.website) {
            window.open(detail.website, '_blank', 'noopener,noreferrer');
        }
    }

    /**
     * 关闭二级菜单
     */
    closeDetailMenu() {
        if (!this.expanded) return;
        
        const menu = document.getElementById(`detail-menu-${this.tech.id}`);
        const expandBtn = document.querySelector(`[data-tech-id="${this.tech.id}"]`);
        
        if (menu) {
            menu.classList.remove('active');
            expandBtn.classList.remove('expanded');
            expandBtn.setAttribute('aria-expanded', 'false');
            expandBtn.querySelector('span').textContent = `查看全部 ${this.tech.techs.length} 项技术`;
            this.expanded = false;
        }
    }
}

// 导出组件
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TechCard;
}
