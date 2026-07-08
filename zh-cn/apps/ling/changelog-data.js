// Ling Player Changelog Data (zh)
// To add a new version, just add a new entry at the beginning of the array.
window.CHANGELOG_DATA = [
  {
    "version": "0.12.5.0",
    "date": "2026-07-08",
    "tag": "Alpha",
    "tagClass": "tag-alpha",
    "categories": [
      {
        "type": "fix",
        "items": [
          "修复了 <span class=\"type-fix\">播放队列弹出层第二次打开时显示异常</span> 的问题",
          "修复了 <span class=\"type-fix\">歌单页面和播放队列弹出层中列表项无法拖拽</span> 的问题",
          "修复了 <span class=\"type-fix\">歌曲、专辑和艺术家等多个页面中多选功能失效</span> 的问题"
        ]
      }
    ]
  },
  {
    "version": "0.12.3.0",
    "date": "2026-07-06",
    "tag": "Alpha",
    "tagClass": "tag-alpha",
    "categories": [
      {
        "type": "new",
        "items": [
          "<span class=\"type-new\">高级设置页面</span>：新增“高级设置”页面，原有的垃圾回收选项已迁移至此页面，并新增“切换页面时触发垃圾回收”选项。路径：<b>设置 -> 高级设置</b>"
        ]
      },
      {
        "type": "opt",
        "items": [
          "<span class=\"type-opt\">文本调整</span>：移除部分文本中不必要的代词，使表述更加简洁"
        ]
      },
      {
        "type": "fix",
        "items": [
          "修复了 <span class=\"type-fix\">启动后首次切换到专辑/艺术家页面时视图切换按钮图标可能显示不正确</span> 的问题",
          "修复了 <span class=\"type-fix\">在某些情况下动态频谱显示异常</span> 的问题"
        ]
      }
    ]
  },
  {
    "version": "0.12.2.0",
    "date": "2026-07-01",
    "tag": "Alpha",
    "tagClass": "tag-alpha",
    "categories": [
      {
        "type": "new",
        "items": [
          "<span class=\"type-new\">跳转栏不透明度</span>：新增跳转栏不透明度设置项（适配浅色/深色主题），路径：<b>设置 -> 用户界面 -> 跳转栏叠加层不透明度</b>"
        ]
      },
      {
        "type": "opt",
        "items": [
          "<span class=\"type-opt\">跳转栏</span>：移除了边框；跳转时目标字符对应的首个条目将默认显示在列表顶部",
          "<span class=\"type-opt\">列表滚动</span>：提升了列表滚动的流畅度"
        ]
      },
      {
        "type": "fix",
        "items": [
          "修复了 <span class=\"type-fix\">跳转栏在窗口尺寸较小时被裁剪</span> 的问题",
          "修复了 <span class=\"type-fix\">跳转栏在某些情况下跳转位置不符合预期</span> 的问题",
          "修复了 <span class=\"type-fix\">CUE 文件内容未发生变化时扫描仍会产生更新</span> 的问题",
          "修复了 <span class=\"type-fix\">Windows 下在任务栏上关闭主窗口时应用没有退出</span> 的问题"
        ]
      }
    ]
  },
  {
    "version": "0.12.0.0",
    "date": "2026-06-27",
    "tag": "Alpha",
    "tagClass": "tag-alpha",
    "categories": [
      {
        "type": "new",
        "items": [
          "<span class=\"type-new\">跳转栏</span>：歌曲、专辑和艺术家页面左侧新增字符跳转栏。点击任意字符，列表将自动滚动到该字母开头的歌曲所在位置。<b>注意：该面板只在排序选项中的第一条件为“标题”或“名称”时显示</b>",
          "<span class=\"type-new\">动态渐变背景颜色过渡</span>：为动态渐变背景增加了颜色过渡动画效果"
        ]
      },
      {
        "type": "opt",
        "items": [
          "<span class=\"type-opt\">俄语文本改进</span>：由 <b>@DanRug08 (MAYHEM)</b> 贡献，非常感谢"
        ]
      },
      {
        "type": "fix",
        "items": [
          "修复了 <span class=\"type-fix\">退出应用时进程未能正常结束</span> 的问题",
          "修复了 <span class=\"type-fix\">切换窗口时歌曲封面出现闪烁</span> 的问题"
        ]
      }
    ]
  },
  {
    "version": "0.11.2.0",
    "date": "2026-06-22",
    "tag": "Alpha",
    "tagClass": "tag-alpha",
    "categories": [
      {
        "type": "fix",
        "items": [
          "修复了 <span class=\"type-fix\">单曲循环模式偶发中断</span> 的问题",
          "修复了 <span class=\"type-fix\">Steam 插件文本在某些语言环境下显示异常</span> 的问题",
          "修复了 <span class=\"type-fix\">Windows 版本启动后从迷你窗口切换至主窗口时任务栏缩略图按钮未能正常显示</span> 的问题"
        ]
      }
    ]
  },
  {
    "version": "0.11.0.0",
    "date": "2026-06-12",
    "tag": "Alpha",
    "tagClass": "tag-alpha",
    "categories": [
      {
        "type": "new",
        "items": [
          "<span class=\"type-new\">任务栏播放控制</span>：鼠标悬停在任务栏图标上时，可进行上一曲、下一曲、播放和暂停操作，播放控制更加便捷",
          "<span class=\"type-new\">歌词编辑</span>：现在可以在歌曲元数据编辑对话框中修改并保存歌曲的内嵌歌词"
        ]
      }
    ]
  },
  {
    "version": "0.10.0.0",
    "date": "2026-06-09",
    "tag": "Alpha",
    "tagClass": "tag-alpha",
    "categories": [
      {
        "type": "new",
        "items": [
          "<span class=\"type-new\">UI缩放选项</span>：现在可以调整界面元素的大小。路径：<b>设置 -> 用户界面</b>",
          "<span class=\"type-new\">导航栏展开宽度设置</span>：现在可以调整左侧导航栏展开时的宽度，可调整范围为[100,480]。路径：<b>设置 -> 用户界面</b>",
          "<span class=\"type-new\">新增语言支持</span>：新增繁体中文、英语（英国）、日语、韩语、俄语、德语、法语、葡萄牙语（巴西）、西班牙语、波兰语、土耳其语语言支持。这些语言的文本可能存在错误，欢迎反馈"
        ]
      },
      {
        "type": "opt",
        "items": [
          "<span class=\"type-opt\">歌词行切换</span>：：添加淡入淡出效果",
          "<span class=\"type-opt\">歌词字体大小和粗细调整</span>普通状态和高亮状态下的歌词文本使用相同的字体大小和粗细"
        ]
      },
      {
        "type": "fix",
        "items": [
          "修复了 <span class=\"type-fix\">专辑编辑对话框中艺术家无法拖拽</span> 的问题",
          "修复了 <span class=\"type-fix\">关闭窗口后再通过任务栏按钮打开窗口之后关闭按钮无法响应</span> 的问题",
          "修复了 <span class=\"type-fix\">当歌曲没有封面时不显示默认图标</span> 的问题",
          "修复了 <span class=\"type-fix\">歌曲末尾被截断</span> 的问题",
          "修复了 <span class=\"type-fix\">播放队列点击歌曲后自动滚动错误导致当前播放歌曲不可见</span> 的问题",
          "修复了 <span class=\"type-fix\">歌曲文件加载失败时仍然显示上一首歌曲封面和歌词</span> 的问题",
          "修复了 <span class=\"type-fix\">保存歌曲元数据时原有歌词丢失</span> 的问题"
        ]
      }
    ]
  },
  {
    "version": "0.9.0.0",
    "date": "2026-06-05",
    "tag": "Alpha",
    "tagClass": "tag-alpha",
    "categories": [
      {
        "type": "new",
        "items": [
          "<span class=\"type-new\">歌曲元数据编辑</span>：支持修改歌曲的封面、标题、艺术家和年份等信息。对歌曲元数据的修改默认将同步写入歌曲文件中，需要注意目前不支持编辑来自 CUE 文件的歌曲元数据。路径：右键点击歌曲 -> 选择<b>编辑元数据</b>",
          "<span class=\"type-new\">专辑元数据编辑</span>：支持修改专辑的标题、艺术家和年份等信息。可选择将专辑标题、艺术家、年份和封面同步应用到专辑内的所有歌曲（将同步写入对应的歌曲文件），需要注意当专辑内包含来自 CUE 文件的歌曲时不支持编辑专辑元数据。路径：右键点击专辑 -> 选择<b>编辑元数据</b>",
          "<span class=\"type-new\">全量扫描选项</span>：开启后将重新扫描所有歌曲，以确保歌曲数据为最新状态。路径：<b>设置 -> 音乐库 -> 全量扫描</b>"
        ]
      },
      {
        "type": "opt",
        "items": [
          "<span class=\"type-opt\">包含文件夹</span>：添加新文件夹时，如果列表中已存在该文件夹的子文件夹，则自动移除这些子文件夹",
          "<span class=\"type-opt\">CUE 文件解析</span>：移除了流派字段中可能附带的双引号",
          "<span class=\"type-opt\">页面跳转</span>：在文件夹页面点击文件夹后，页面指示器将停留在文件夹菜单而非歌曲菜单；歌单页面也做了相应的调整",
          "<span class=\"type-opt\">缩略图生成</span>：统一生成高度为 200 像素的缩略图，不再为歌曲、专辑和艺术家分别生成不同尺寸的缩略图，以减少磁盘空间占用",
          "<span class=\"type-opt\">艺术家/流派解析</span>：智能识别并保留手动修改的歌曲艺术家、专辑艺术家及流派信息，不再被原始标签覆盖"
        ]
      },
      {
        "type": "fix",
        "items": [
          "修复了 <span class=\"type-fix\">添加歌单对话框过小</span> 的问题",
          "修复了 <span class=\"type-fix\">专辑页面右键菜单可能引发崩溃</span> 的问题",
          "修复了 <span class=\"type-fix\">没有歌曲时，点击歌曲页面的<b>曲库</b>按钮跳转后未正确选中<b>设置</b>菜单</span> 的问题",
          "修复了 <span class=\"type-fix\">编辑专辑元数据时，删除艺术家后保存导致该艺术家被错误删除</span> 的问题",
          "修复了 <span class=\"type-fix\">在外部修改歌曲元数据后，重新扫描无法更新歌曲信息</span> 的问题",
          "修复了 <span class=\"type-fix\">在某些情况下，CUE 文件关联的音频文件被意外当作普通歌曲文件添加到曲库</span> 的问题",
          "修复了 <span class=\"type-fix\">已编辑的专辑或艺术家在符合移除条件时仍无法被移除</span> 的问题",
          "修复了 <span class=\"type-fix\">拖拽文件夹或多个歌曲文件到歌曲或歌单页面进行扫描后显示的扫描结果不正确</span> 的问题",
          "修复了 <span class=\"type-fix\">首次切换到专辑页面时视图设置未正确应用</span> 的问题"
        ]
      }
    ]
  },
  {
    "version": "0.8.1.0",
    "date": "2026-05-24",
    "tag": "Alpha",
    "tagClass": "tag-alpha",
    "categories": [
      {
        "type": "opt",
        "items": [
          "<span class=\"type-opt\">Mini 窗口播放列表操作</span>：新增 mini 窗口播放列表操作页面，点击右下角的列表按钮即可打开。支持切换歌曲、移除队列中的歌曲、清空队列等操作",
          "<span class=\"type-opt\">Mini 窗口设置</span>：新增 mini 窗口设置页面，点击最右侧的设置按钮即可打开。目前包含以下设置：主题（与全局设置同步）、叠加层透明度，以及是否在任务栏显示 mini 窗口图标",
          "<span class=\"type-opt\">Mini 窗口歌曲封面移除圆角</span>：移除了 mini 窗口中歌曲封面的圆角效果，避免在窗口四角出现黑色或白色区域",
          "<span class=\"type-opt\">时长过滤设置项默认值调整</span>：时长过滤设置项的默认值现已调整为 0，避免影响初次扫描歌曲时的结果"
        ]
      },
      {
        "type": "fix",
        "items": [
          "修复了 <span class=\"type-fix\">专辑详情页面在介绍文本过长时内容溢出</span> 的问题",
          "修复了 <span class=\"type-fix\">艺术家详情页面在介绍文本过长时内容溢出且页面无法滚动</span> 的问题",
          "修复了 <span class=\"type-fix\">艺术家名称包含特殊字符时无法为其设置图片</span> 的问题"
        ]
      }
    ]
  },
  {
    "version": "0.8.0.0",
    "date": "2026-05-22",
    "tag": "Alpha",
    "tagClass": "tag-alpha",
    "categories": [
      {
        "type": "new",
        "items": [
          "<span class=\"type-new\">渲染模式选项</span>：当遇到界面闪烁、显示异常等渲染问题时，可尝试切换渲染模式。路径：<b>设置</b> -> <b>用户界面</b> -> <b>渲染模式</b>",
          "<span class=\"type-new\">日志文件自动清除</span>：应用启动时会自动删除 7 天前的日志文件。此外也可以随时在 <b>关于</b> 页面中，点击 <b>日志缓存</b> 下的 <b>清除缓存</b> 以删除所有日志文件"
        ]
      },
      {
        "type": "fix",
        "items": [
          "修复了 <span class=\"type-fix\">设置文件无效时应用无法启动</span> 的问题"
        ]
      }
    ]
  },
  {
    "version": "0.7.8.0",
    "date": "2026-05-21",
    "tag": "Alpha",
    "tagClass": "tag-alpha",
    "categories": [
      {
        "type": "fix",
        "items": [
          "修复了 <span class=\"type-fix\">播放采样位深为 16 位的 WAV 文件时崩溃</span> 的问题 （感谢 <b>@FunkeymonkeyTTR</b>）",
          "修复了 <span class=\"type-fix\">部分 M4A 文件时长不正确</span> 的问题",
          "修复了 <span class=\"type-fix\">部分 M4A 文件无法播放</span> 的问题",
          "修复了 <span class=\"type-fix\">统计页面中部分艺术家不显示</span> 的问题"
        ]
      }
    ]
  },
  {
    "version": "0.7.7.0",
    "date": "2026-05-20",
    "tag": "Alpha",
    "tagClass": "tag-alpha",
    "categories": [
      {
        "type": "fix",
        "items": [
          "修复了 <span class=\"type-fix\">重采样流程中因缓冲区写入越界而导致的崩溃</span> 的问题 （感谢 <b>@FunkeymonkeyTTR</b>）",
          "修复了 <span class=\"type-fix\">统计页面的歌曲列表中已不存在的歌曲显示错位</span> 的问题",
          "修复了 <span class=\"type-fix\">“添加到下一首”菜单图标显示异常</span> 的问题",
          "修复了 <span class=\"type-fix\">当专辑名或艺术家名包含文件名中不支持的字符时，生成的缩略图无法读取</span> 的问题"
        ]
      }
    ]
  },
  {
    "version": "0.7.4.0",
    "date": "2026-05-19",
    "tag": "Alpha",
    "tagClass": "tag-alpha",
    "categories": [
      {
        "type": "opt",
        "items": [
          "<span class=\"type-opt\">歌曲封面图片现在支持向上查找最多3层父级文件夹</span>：当歌曲所在文件夹中没有封面图片时，将依次向上级目录查找，最多查找3层"
        ]
      },
      {
        "type": "fix",
        "items": [
          "修复了 <span class=\"type-fix\">在搜索页面短时间内多次更改搜索关键词时，可能显示的是上一个关键词的搜索结果</span> 的问题",
          "修复了 <span class=\"type-fix\">在搜索页面输入必定无法搜到结果的关键词时仍然显示了全部歌曲</span> 的问题",
          "修复了 <span class=\"type-fix\">在某些情况下CUE文件解析出的歌曲起始偏移量错误</span> 的问题",
          "修复了 <span class=\"type-fix\">播放 CUE 文件对应的歌曲时，时长显示不正确</span> 的问题",
          "修复了 <span class=\"type-fix\">播放文件夹时，未包含子文件夹中歌曲</span> 的问题"
        ]
      }
    ]
  },
  {
    "version": "0.7.2.0",
    "date": "2026-05-18",
    "tag": "Alpha",
    "tagClass": "tag-alpha",
    "categories": [
      {
        "type": "fix",
        "items": [
          "修复了 <span class=\"type-fix\">切换到随机播放模式后，点击任意歌曲时未按预期播放该歌曲</span> 的问题",
          "修复了 <span class=\"type-fix\">因时长读取错误导致 m4a 文件无法添加到曲库</span> 的问题",
          "修复了 <span class=\"type-fix\">底部播放控制面板左侧按钮圆角与歌曲封面缩略图圆角不匹配</span> 的问题",
          "修复了 <span class=\"type-fix\">Steam插件设置无法保存</span> 的问题"
        ]
      }
    ]
  },
  {
    "version": "0.7.0.0",
    "date": "2026-05-17",
    "tag": "Alpha",
    "tagClass": "tag-alpha",
    "categories": [
      {
        "type": "new",
        "items": [
          "<span class=\"type-new\">歌曲页面支持拖拽歌曲文件</span>：歌曲页面现已支持文件拖拽操作。可以拖拽一个或多个歌曲文件（或文件夹）到页面中进行扫描，不再限制于文件夹",
          "<span class=\"type-new\">歌单支持拖拽添加歌曲</span>：现在可以直接拖拽一个或多个歌曲文件（或文件夹）到歌单中。拖拽完成后，将自动扫描歌曲并将其添加到歌单"
        ]
      },
      {
        "type": "opt",
        "items": [
          "<span class=\"type-opt\">动态渐变效果调整</span>：移除了颜色混合，避免出现预期外的颜色",
          "<span class=\"type-opt\">窗口透明效果调整</span>：Windows 11默认选择Mica效果，Windows 10默认选择Acrylic blur效果，其他情况下默认选择Blur效果"
        ]
      },
      {
        "type": "fix",
        "items": [
          "修复了 <span class=\"type-fix\">开源许可页面无法打开</span> 的问题",
          "修复了 <span class=\"type-fix\">当文件后缀为全大写（例如：MP3、FLAC）时，歌曲无法被正常识别</span> 的问题"
        ]
      }
    ]
  },
  {
    "version": "0.6.0.0",
    "date": "2026-05-16",
    "tag": "Alpha",
    "tagClass": "tag-alpha",
    "categories": [
      {
        "type": "other",
        "items": [
          "启用 AOT（预先编译），<span class=\"type-opt\">大幅提升应用性能和启动速度</span>",
          "得益于 AOT，应用体积<span class=\"type-opt\">减小超过 50%</span>"
        ]
      }
    ]
  },
  {
    "version": "0.5.8.0",
    "date": "2026-05-15",
    "tag": "Alpha",
    "tagClass": "tag-alpha",
    "categories": [
      {
        "type": "fix",
        "items": [
          "修复了 <span class=\"type-fix\">当设置文件无效时应用无法启动</span> 的问题",
          "修复了 <span class=\"type-fix\">在某些情况下从歌曲封面提取的主色调依然为接近纯白或纯黑色</span> 的问题"
        ]
      }
    ]
  },
  {
    "version": "0.5.7.0",
    "date": "2026-05-14",
    "tag": "Alpha",
    "tagClass": "tag-alpha",
    "categories": [
      {
        "type": "fix",
        "items": [
          "修复了 <span class=\"type-fix\">当歌曲封面不是正方形时，下方歌曲信息与封面未对齐</span> 的问题",
          "修复了 <span class=\"type-fix\">空专辑（即没有关联任何歌曲的专辑）无法删除</span> 的问题",
          "修复了 <span class=\"type-fix\">移除指定歌曲时错误移除了其他歌曲</span> 的问题",
          "修复了 <span class=\"type-fix\">当已添加某个文件夹后，再次将该文件夹拖拽到歌曲页面会导致该文件夹被移除</span> 的问题",
          "修复了 <span class=\"type-fix\">移除歌曲后，歌曲页面标题右侧的歌曲数量未及时更新</span> 的问题"
        ]
      }
    ]
  },
  {
    "version": "0.5.6.0",
    "date": "2026-05-13",
    "tag": "Alpha",
    "tagClass": "tag-alpha",
    "categories": [
      {
        "type": "opt",
        "items": [
          "从歌曲封面提取的主色调将<span class=\"type-opt\">自动跳过接近纯黑或纯白的颜色</span>"
        ]
      },
      {
        "type": "fix",
        "items": [
          "修复了 <span class=\"type-fix\">窗口最大化后再切换至全屏时，最大化按钮显示不正确</span> 的问题",
          "修复了 <span class=\"type-fix\">窗口最大化后，左侧导航菜单和右侧滚动条被裁剪</span> 的问题"
        ]
      }
    ]
  },
  {
    "version": "0.5.5.0",
    "date": "2026-05-12",
    "tag": "Alpha",
    "tagClass": "tag-alpha",
    "categories": [
      {
        "type": "opt",
        "items": [
          "<span class=\"type-opt\">专辑合并规则调整</span>：新增艺术家严格匹配规则。专辑名相同但艺术家不同的歌曲，将不会合并到同一张专辑中"
        ]
      }
    ]
  },
  {
    "version": "0.5.4.0",
    "date": "2026-05-12",
    "tag": "Alpha",
    "tagClass": "tag-alpha",
    "categories": [
      {
        "type": "opt",
        "items": [
          "<span class=\"type-opt\">专辑合并规则</span>：合并专辑前，会检测歌曲之间是否存在碟号或曲目号冲突。若存在冲突，将自动拆分为多张独立专辑",
          "<span class=\"type-opt\">专辑 / 艺术家默认排序</span>：默认排序规则已调整为按名称升序排列",
          "<span class=\"type-opt\">新增艺术家页面显示参与创作艺术家开关</span>：控制是否在艺术家页面显示参与创作的艺术家。默认不显示，可在 <b>设置</b> -> <b>用户界面</b> 中找到 <b>在艺术家页面中显示参与创作艺术家</b> 选项以启用",
          "<span class=\"type-opt\">扫描后自动清理</span>：扫描完成后，没有歌曲的专辑、以及无关的艺术家将被自动删除。若对专辑进行过编辑（如修改年份、封面、专辑艺术家等），则该专辑将保留；艺术家同理",
          "<span class=\"type-opt\">导航菜单设置调整</span>：导航菜单设置已移入独立设置界面，路径：<b>设置</b> -> <b>导航菜单</b>"
        ]
      }
    ]
  },
  {
    "version": "0.5.1.0",
    "date": "2026-05-11",
    "tag": "Alpha",
    "tagClass": "tag-alpha",
    "categories": [
      {
        "type": "new",
        "items": [
          "<span class=\"type-new\">播放界面动态渐变壁纸</span>：现在可以为播放界面设置动态渐变壁纸，可在 <b>设置</b> → <b>用户界面</b> → <b>播放界面</b> 中找到 <b>壁纸</b> 选项并进行设置"
        ]
      },
      {
        "type": "opt",
        "items": [
          "对<span class=\"type-opt\">桌面歌词</span>功能进行了多项优化，改善了稳定性和显示效果",
          "<span class=\"type-opt\">侧边栏中统计菜单的图标</span>已更新"
        ]
      },
      {
        "type": "fix",
        "items": [
          "修复了 <span class=\"type-fix\">向播放队列添加歌曲时，弹出的提示中歌曲数量显示为 0</span> 的问题",
          "修复了 <span class=\"type-fix\">播放界面中封面图片外层视觉效果被意外裁剪</span> 的问题"
        ]
      }
    ]
  },
  {
    "version": "0.4.0.0",
    "date": "2026-05-07",
    "tag": "Alpha",
    "tagClass": "tag-alpha",
    "categories": [
      {
        "type": "new",
        "items": [
          "<span class=\"type-new\">歌曲页面文件夹拖拽支持</span>：现在可以直接从文件资源管理器中拖拽包含歌曲的文件夹到歌曲页面，文件夹将被添加并自动开始扫描歌曲",
          "<span class=\"type-new\">扫描进度对话框</span>：扫描进度现在以独立的对话框形式展示"
        ]
      },
      {
        "type": "fix",
        "items": [
          "修复了 <span class=\"type-fix\">播放队列面板右上角按钮间距过大</span> 的问题",
          "修复了 <span class=\"type-fix\">英文环境下“图片圆角强度”选项的文本和描述不显示</span> 的问题",
          "修复了 <span class=\"type-fix\">切换语言后插件管理页面及其设置页面上的文本没有同步切换</span> 的问题"
        ]
      }
    ]
  },
  {
    "version": "0.3.4.0",
    "date": "2026-05-07",
    "tag": "Alpha",
    "tagClass": "tag-alpha",
    "categories": [
      {
        "type": "fix",
        "items": [
          "修复了 <span class=\"type-fix\">当歌曲封面是灰度图像时，颜色提取结果不正确</span> 的问题",
          "修复了 <span class=\"type-fix\">统计页面中的时段统计图表纵坐标文本可能重叠</span> 的问题",
          "修复了 <span class=\"type-fix\">时段统计中的小时记录不正确</span> 的问题"
        ]
      }
    ]
  },
  {
    "version": "0.3.2.0",
    "date": "2026-05-05",
    "tag": "Alpha",
    "tagClass": "tag-alpha",
    "categories": [
      {
        "type": "opt",
        "items": [
          "优化了 <span class=\"type-opt\">歌曲封面颜色提取算法</span>，颜色提取结果更精准",
          "<span class=\"type-opt\">支持将已在队列中的歌曲设为\"下一首\"</span>，队列位置将自动调整"
        ]
      },
      {
        "type": "fix",
        "items": [
          "修复了 <span class=\"type-fix\">krc 和 qrc 格式的歌词文件无法正常加载解析</span> 的问题"
        ]
      }
    ]
  },
  {
    "version": "0.3.1.0",
    "date": "2026-05-04",
    "tag": "Alpha",
    "tagClass": "tag-alpha",
    "categories": [
      {
        "type": "opt",
        "items": [
          "<span class=\"type-opt\">统计页面顶部的进度条左侧图标大小已进行调整</span>，界面更加协调"
        ]
      },
      {
        "type": "fix",
        "items": [
          "修复了 <span class=\"type-fix\">日期切换（跨天或跨周）时，“今日”和“本周”的播放时长及播放歌曲数未能正确重置</span> 的问题",
          "修复了 <span class=\"type-fix\">手动设置系统时间时，播放时间统计数据出现异常减少或增加</span> 的问题"
        ]
      }
    ]
  },
  {
    "version": "0.3.0.0",
    "date": "2026-05-03",
    "tag": "Alpha",
    "tagClass": "tag-alpha",
    "categories": [
      {
        "type": "new",
        "items": [
          "<span class=\"type-new\">播放控制按钮常驻显示</span>：可通过 <b>设置 -> 用户界面</b> 页面中的 <b>播放控制按钮始终可见</b> 开关启用",
          "<span class=\"type-new\">图片圆角强度独立调节</span>：展开 <b>设置 -> 用户界面</b> 页面中的 <b>图片圆角强度</b> 选项，可分别控制歌曲封面、专辑封面和艺术家图片的圆角程度"
        ]
      },
      {
        "type": "fix",
        "items": [
          "修复了 <span class=\"type-fix\">启动应用时，Steam 丰富状态未按插件中设置的格式正确显示</span> 的问题"
        ]
      }
    ]
  },
  {
    "version": "0.2.1.0",
    "date": "2026-05-02",
    "tag": "Alpha",
    "tagClass": "tag-alpha",
    "categories": [
      {
        "type": "new",
        "items": [
          "新增 <span class=\"type-new\">专辑列表/专辑详情页删除专辑选项</span>，仅当专辑内无任何歌曲时可用",
          "新增 <span class=\"type-new\">艺术家详情页删除艺术家选项</span>，仅当艺术家没有任何专辑和歌曲时可用"
        ]
      },
      {
        "type": "opt",
        "items": [
          "Steam 插件现为<span class=\"type-opt\">默认启用</span>状态",
          "<span class=\"type-opt\">时长不足 60 秒的歌曲不再计入成就统计</span>——我们希望成就代表真实的听歌习惯"
        ]
      },
      {
        "type": "fix",
        "items": [
          "修复了 <span class=\"type-fix\">因专辑解析流程对碟号/曲目号有严格不重叠要求，导致多张同名专辑且艺术家列表完全相同时启动崩溃</span> 问题（感谢 <b>@FunkeymonkeyTTR</b>）",
          "修复了 <span class=\"type-fix\">被时长过滤规则排除的歌曲，在调整规则后重新扫描也无法入库</span> 问题（感谢 <b>@Nomstuff</b>）",
          "修复了 <span class=\"type-fix\">歌曲的艺术家/专辑艺术家属性可能出现重复同名条目</span> 的问题",
          "修复了 <span class=\"type-fix\">更换专辑或艺术家封面时，旧封面文件残留未清理</span> 的问题"
        ]
      }
    ]
  },
  {
    "version": "0.1.1.0",
    "date": "2026/05/01",
    "tag": "Alpha",
    "tagClass": "tag-alpha",
    "categories": [
      {
        "type": "opt",
        "items": [
          "“暂无歌词”提示应用歌曲封面主色"
        ]
      },
      {
        "type": "fix",
        "items": [
          "修复了 <span class=\"type-fix\">托盘菜单播放/暂停按钮状态不正确</span> 的问题",
          "修复了 <span class=\"type-fix\">托盘菜单开启后无法关闭</span> 的问题",
          "修复了 <span class=\"type-fix\">在歌曲点击动作为替换当前队列的情况下点击列表中的歌曲时必定播放第一首歌曲</span> 的问题"
        ]
      }
    ]
  },
  {
    "version": "0.0.1.0",
    "date": "2026/05/01",
    "tag": "Alpha",
    "tagClass": "tag-alpha",
    "categories": [
      {
        "type": "plain",
        "html": "轻灵音乐第一个版本。"
      }
    ]
  }
];

window.TYPE_LABELS = {
  new: "✨ 新增功能",
  opt: "⚡ 优化调整",
  fix: "🔧 问题修复",
  other: "📌 其它"
};

window.CHANGELOG_LABELS = {
  newFeatures: "✨ 新增功能",
  improvements: "⚡ 优化调整",
  bugFixes: "🔧 问题修复",
  changelogTitle: "更新日志",
  changelogDesc: "记录轻灵音乐的每一次迭代"
};
