/*
Navicat MySQL Data Transfer

Source Server         : haituncun
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : haituncun

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-02-09 17:56:32
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for buycar
-- ----------------------------
DROP TABLE IF EXISTS `buycar`;
CREATE TABLE `buycar` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `weight` decimal(10,2) NOT NULL,
  `imgs` varchar(255) NOT NULL,
  `qty` int(11) NOT NULL DEFAULT '1',
  `shop` varchar(255) CHARACTER SET utf8 NOT NULL,
  `country` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `tallage` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=31 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of buycar
-- ----------------------------
INSERT INTO `buycar` VALUES ('2', '�?件包邮装】Aptamil 爱他�?白金�?�?婴幼儿配方奶�?3*900g/罐（适合2岁以上宝宝）', '688.00', '200.00', '../img/aptamil.jpg', '4', '澳洲PO药品连锁�?', '澳洲直邮', '103.20');

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `brand` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `weight` decimal(10,2) NOT NULL,
  `tallage` decimal(10,2) DEFAULT NULL,
  `original_price` varchar(10) CHARACTER SET utf8 DEFAULT NULL,
  `imgs` varchar(255) NOT NULL,
  `qty` int(11) NOT NULL DEFAULT '1',
  `shop` varchar(255) CHARACTER SET utf8 NOT NULL,
  `country` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `englishname` varchar(255) DEFAULT NULL,
  `add_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `description` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=31 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', 'Caudalie 欧缇�?葡萄籽胶�?30粒（减缓老化现象/排毒效果/肤色恢复神采�?', '251.24', ' Caudalie/欧缇�?', '50.00', '37.69', '�?0.20', '../img/caudalie.jpg', '1', '德国BA保镖药房', '德国直邮', 'CAUDALIE Vinexpert Complements Alimentaires Kaps. 30 Stück', '2018-02-08 15:17:29', '抗氧化，能防止自由基生成对肌肤造成的伤害，有效减缓老化现象，使肤质柔细，淡化细纹，强烈的水合效果使皮肤湿度增加，排毒效果，使肤色恢复神采。服用叁个月后，能有效改善肌肤因疲劳、空气污染、过度日晒、尘烟、运动等所产生的肌肤问题，可改善因上述状况引起的皮肤变化。温馨提示：本品为膳食补充剂（营养素补充剂），不能替代药物�?');
INSERT INTO `goods` VALUES ('2', '�?件包邮装】Aptamil 爱他�?白金�?�?婴幼儿配方奶�?3*900g/罐（适合2岁以上宝宝）', '688.00', 'Aptamil/澳洲爱他�?', '200.00', '103.20', 'AU$122.81', '../img/aptamil.jpg', '1', '澳洲PO药品连锁�?', '澳洲直邮', 'Aptamil Profutura 4 Premium Follow-On Formula', '2018-02-08 15:23:10', 'Aptamil 爱他美金装加强配方奶�?段，不含蔗糖，含有比普通牛奶多十倍以上的铁质，并含有丰富维他命C，帮助吸收铁质，同时提供宝宝成长所需的钙质及蛋白质；含有菊粉，帮助肠道有益菌生长，抑制有害细菌，所以对感染导致的腹泻有预防作用。此外还特别添加了母乳中的自然成分LCP Omega 6、Omega 3和DHA�?DHA对宝宝的脑、眼睛及神经发育都非常重要�?');
INSERT INTO `goods` VALUES ('4', 'L\'occitane 欧舒�?乳木果护手霜 30ml', '99.41', 'L’occitane/欧舒�?', '60.00', '15.00', '\r\n�?1.95', '../img/goods14.jpg', '1', '德国BA保镖药房', '德国直邮', 'L\'OCCITANE KARITÉ HANDCREME 30 ml', '2018-02-08 15:25:58', 'L\'Occitane 欧舒�?护手霜是2015年度《Self悦己》美妆大奖，2015年《闺蜜网》美妆大奖，2015年度ONLYLADY编辑甄选大奖，欧舒丹全球畅销产品之一。富含乳木果精华，质地柔润，迅速渗透肌肤，发挥保护、滋养及保湿作用，配方更添加了蜂蜜精华、甜扁桃精华及椰子油，带来卓效的保湿效果。自然细腻、幼滑如丝，蕴含丰富的乳木果油及维他命E成份，可以滋润及修护双手细致肌肤，令双手柔软光滑，散发玫瑰细致而馥郁的清香。浓郁软滑的润手霜，散发奢华的玫瑰淡香氛香气，用后令双手宛如玫瑰花瓣般柔软芳香�?');
INSERT INTO `goods` VALUES ('3', 'Swisse 男士复合维生素片 120�?', '207.00', 'Swisse', '200.00', '31.05', 'AU$36.95', '../img/goods16.jpg', '1', '澳洲PO药品连锁�?', '澳洲直邮', 'Swisse Men\'s Ultivite Multi-Vitamin Tab X 120', '2018-02-08 15:20:24', 'Swisse 男士复合维生素片专为现代都市男性设计的配方，历�?5多年的全球性研究和临床认证，随科学发展进步不断更新制成。全面为男士提供每日所需的必须维生素、矿物质和草本元素，并特别添加抗老化元素。能有效抗疲劳，舒缓压力，改善男性生理机能，帮助男士每日维持生活与工作各方面达到生理和心理的最佳状态，轻松一片令您自信活力一整天�?\n温馨提示：本品为膳食补充剂（营养素补充剂），不能替代药物�?');
INSERT INTO `goods` VALUES ('5', '�?件包邮装】Blackmores 澳佳�?1500mg 维骨力关节灵 2*180�?�?', '360.00', 'Blackmores/澳佳�?', '1000.00', '54.00', 'AU$64.26', '../img/goods1.jpg', '1', '自营澳洲1号仓', '澳洲直邮', 'Blackmores Glucosamine Sulfate 1500mg', '2018-02-08 18:57:49', '这款澳佳宝维骨力主要成分为氨基葡萄糖，是形成软骨细胞的重要营养素。可以帮助修复和维护软骨，刺激软骨细胞生长。一天一粒，不过该产品取自甲壳类海洋生物，海鲜过敏者不能使用�?\n温馨提示：本品为膳食补充剂（营养素补充剂），不能替代药物�?');
INSERT INTO `goods` VALUES ('6', '�?件包邮装】Max Factor 蜜丝佛陀 水漾魔幻触感粉底�?2*11.5g/�?', '155.00', 'Max Factor/蜜丝佛陀', '200.00', '90.00', '¥2,430.00', '../img/product.jpg', '1', '自营香港2号仓', '香港直邮', null, '2018-02-08 15:33:06', '膏状的粉底，上妆自然服帖，遮瑕效果不错，用手指在粉底膏上打圈圈，会变为粉底液状，比一般的膏状粉底滋润，丝滑的感觉有别于一般的粉底膏�?这是一款最具遮�?修容/裸妆/完美妆容为一体，妆后效果薄透明亮、光滑柔嫩、饱满水嫩、细致平滑，清透，滋润有光泽。这是您打阿造自然光彩迷人的第一选择�?');
INSERT INTO `goods` VALUES ('7', '�?件包邮装】Bio Island 生物�?50000mg袋鼠精胶�?2*90�?', '239.00', 'Bio Island/生物�?', '550.00', '35.85', 'AU$42.66', '../img/fbaauspl.jpg', '1', '自营澳洲1号仓', '澳洲直邮', 'Bio Island Kangaroo Essence 50000mg 90C', '2018-02-08 18:58:02', 'Bio Island 袋鼠精胶囊，其主要成分为袋鼠粉，具有补肾强精，益气提神，全面调节内分泌平衡人体荷尔蒙，提高生理机能，强化微血管有效防止体内细胞器官的衰老恢复内脏器官达到最佳状态使人保持青春活力�?\n温馨提示：本品为膳食补充剂（营养素补充剂），不能替代药物�?');
INSERT INTO `goods` VALUES ('8', '�?件包邮装】Balea 芭乐�?玻尿酸橄榄油海藻保湿精华胶囊 5*7�?�?', '119.00', 'Balea/芭乐�?', '150.00', '35.70', '�?6.23', '../img/goods.jpg', '1', '自营荷兰1号仓', '荷兰直邮', 'Balea Ampullen Beauty Effect Lifting Kur, 5*7 ml', '2018-02-08 15:39:04', 'Balea 芭乐�?玻尿酸橄榄油海藻保湿精华胶囊富含橄榄油、绿藻精华和多种维他命等珍贵保湿成分。适合各种肤质，防止肌肤水分流失，调节肌肤水平衡。帮助肌肤防御外界环境的侵害，使护理后的肌肤柔韧有弹性，无紧绷感觉。不含防腐剂，人工香料和矿物油，纯天然使用安全放心�?');
INSERT INTO `goods` VALUES ('9', '【包邮装】AnneMarie Borlind 安娜柏林 橙花蜜原液精�?50ml', '179.00', 'AnneMarie Borlind/安娜柏林', '100.00', '90.00', '�?1.52', '../img/goods18.jpg', '1', '自营荷兰1号仓', '荷兰直邮', 'AnneMarie Borlind Orange Blossom Energy Booster 50 ml', '2018-02-08 15:42:09', 'AnneMarie Borlind 安娜柏林 橙花蜜原液精华拥有鲜活的2种混合原液，富含珍贵的低温萃取的植物油和精华原液，令肌肤再现紧致光滑，焕发活力。西西里岛有机血橙菁华富含油溶性维他命C和维他命B5，能抑制深黑色素并使转化为浅黑色素，扫除暗沉肤色、淡斑，使之净白。很好的抗氧化及保护作用，以防抗游离基侵害，延缓皮肤老化�?');
INSERT INTO `goods` VALUES ('10', '�?件包邮装】Hipp 喜宝 小鸭子无泪免敏宝宝洗�?洗脸�?3*250ml/�?', '129.00', 'Hipp/喜宝', '700.00', '38.70', '�?5.51', '../img/goods19.jpg', '1', '德国1号仓', '香港直邮', null, '2018-02-09 09:37:56', '外形为可爱的鸭子，采用压泵式设计，让儿童感到无比的有趣！特有的柔和成份让宝宝肌肤有效的清洁。且PH值为中性，通过皮肤科的专业测试�?');
INSERT INTO `goods` VALUES ('11', '【包邮装】Marvis 玛尔�?薄荷牙膏套装 3支（肉桂+美白+超强薄荷�?', '129.00', 'Marvis/玛尔�?', '330.00', '38.70', '�?5.66', '../img/goods21.jpg', '1', '自营荷兰1号仓', '荷兰直邮', null, '2018-02-08 15:50:53', 'Marvis 玛尔�?薄荷牙膏能解热镇痛、抗龋齿牙周炎，有助于预防龋齿、牙石和牙菌斑，提升牙齿珐琅质的保护力和抵抗力�?');
INSERT INTO `goods` VALUES ('12', '�?件包邮装】Femfresh 芳芯 女性私处私密护理液 4*250ml/瓶（止痒抑菌�?', '169.00', 'Femfresh/芳芯', '1200.00', '16.90', 'AU$26.60 ', '../img/goods22.jpg', '1', '自营澳洲1号仓', '澳洲直邮', 'Femfresh Intimate Wash 4 x 250ml', '2018-02-08 15:50:39', 'Femfresh 洗护液不同于普通肥皂及沐浴露，富含滋润成分及植物提取物�?洋甘菊芦�? 经典款，日常护理常备款， 很温和；如果无任何妇科炎症，正常健康的亲首选这款护理，富含有甘菊、芦荟以及叶鞘植物中的天然乳酸成分，其温和配方特别为女性设计，在保持自然酸?平衡的基础上清洁女性私密处，以帮助防止女性私密处炎症和感染。经英国专业的皮肤及妇科卫生组织测试，其温和配方适合每日使用�?');
INSERT INTO `goods` VALUES ('13', '【包邮装】Snurk 小公主全棉单人被罩枕�?150*200cm', '369.00', 'Snurk', '1090.00', '110.70', '�?4.36', '../img/goods23.jpg', '1', '自营荷兰1号仓', '欧洲直邮', 'Snurk Princess', '2018-02-08 15:54:24', '超柔软：棉花来自世界纯净的棉花产区；舒适柔软：直接接触，柔软舒适，不刺激；超透气：采用透气性极佳的工艺；手工制作：每一套都是艺术品；欧盟认证：经过严苛的质量认证。被�?1�?50*200cm、枕�?1�?0*80cm');
INSERT INTO `goods` VALUES ('14', '【包邮装】Brita 碧然�?金典系列 M系列滤水�?3.5L（蓝色）', '175.00', 'Brita/碧然�?', '3000.00', '52.50', '�?1.04', '../img/goods24.jpg', '1', '德国1号仓', '香港直邮', null, '2018-02-09 09:38:03', 'Brita Marella 碧然德滤水壶3.5�?蓝色，水是人体的重要组成部分，每天我们需要饮用大量的水来补充身体的需要，而最健康的饮品就是纯净的水，但前水质受到污染，即使满足卫生标准的饮用水，里面富含的多种漂白滤水成分不仅使水质口感不好，还会影响了大人、宝宝和老人的健康，此滤水壶主要用于使饮用水更清洁，口味更纯正，可用于厨房，可饮用水，烧菜，烧汤，洗涤，也可用于热饮机，咖啡机，关爱家人，从水开始，让我们的生活更健康！');
INSERT INTO `goods` VALUES ('15', '【包邮装】Fissler 菲仕�?平底不粘�?28cm', '398.00', 'Fissler/菲仕�?', '1300.00', '119.40', '�?7.84 ', '../img/goods25.jpg', '1', '德国2号仓', '	德国直邮', 'Fissler-Deutschland 28cm Antihaft', '2018-02-08 15:58:17', '锅里层，外层均为不粘涂层的设计，清洗易如反掌�?8cm超大直径�?cm内壁深度，实用的边缘突起令倾倒流畅不外漏。防烫把手绝热效果完美，丝毫感受不到锅的烫度。耐高温达400°，适合中国人的烹饪习惯。不会有任何刮痕，更不用像普通涂层平底锅担心掉涂层的问题。适合各种炉灶包括电磁炉，电陶炉。一锅三用，无论炒、煎、炸等手到擒来�?');
INSERT INTO `goods` VALUES ('16', 'Caudalie 欧缇�?葡萄籽胶�?30粒（减缓老化现象/排毒效果/肤色恢复神采�?', '251.24', ' Caudalie/欧缇�?', '50.00', '37.69', '�?0.20', '../img/caudalie.jpg', '1', '德国BA保镖药房', '德国直邮', 'CAUDALIE Vinexpert Complements Alimentaires Kaps. 30 Stück', '2018-02-08 15:17:29', '抗氧化，能防止自由基生成对肌肤造成的伤害，有效减缓老化现象，使肤质柔细，淡化细纹，强烈的水合效果使皮肤湿度增加，排毒效果，使肤色恢复神采。服用叁个月后，能有效改善肌肤因疲劳、空气污染、过度日晒、尘烟、运动等所产生的肌肤问题，可改善因上述状况引起的皮肤变化。温馨提示：本品为膳食补充剂（营养素补充剂），不能替代药物�?');
INSERT INTO `goods` VALUES ('17', '�?件包邮装】Aptamil 爱他�?白金�?�?婴幼儿配方奶�?3*900g/罐（适合2岁以上宝宝）', '688.00', 'Aptamil/澳洲爱他�?', '200.00', '103.20', 'AU$122.81', '../img/aptamil.jpg', '1', '澳洲PO药品连锁�?', '澳洲直邮', 'Aptamil Profutura 4 Premium Follow-On Formula', '2018-02-08 15:23:10', 'Aptamil 爱他美金装加强配方奶�?段，不含蔗糖，含有比普通牛奶多十倍以上的铁质，并含有丰富维他命C，帮助吸收铁质，同时提供宝宝成长所需的钙质及蛋白质；含有菊粉，帮助肠道有益菌生长，抑制有害细菌，所以对感染导致的腹泻有预防作用。此外还特别添加了母乳中的自然成分LCP Omega 6、Omega 3和DHA�?DHA对宝宝的脑、眼睛及神经发育都非常重要�?');
INSERT INTO `goods` VALUES ('18', 'L\'occitane 欧舒�?乳木果护手霜 30ml', '99.41', 'L’occitane/欧舒�?', '60.00', '15.00', '\r\n�?1.95', '../img/goods14.jpg', '1', '德国BA保镖药房', '德国直邮', 'L\'OCCITANE KARITÉ HANDCREME 30 ml', '2018-02-08 15:25:58', 'L\'Occitane 欧舒�?护手霜是2015年度《Self悦己》美妆大奖，2015年《闺蜜网》美妆大奖，2015年度ONLYLADY编辑甄选大奖，欧舒丹全球畅销产品之一。富含乳木果精华，质地柔润，迅速渗透肌肤，发挥保护、滋养及保湿作用，配方更添加了蜂蜜精华、甜扁桃精华及椰子油，带来卓效的保湿效果。自然细腻、幼滑如丝，蕴含丰富的乳木果油及维他命E成份，可以滋润及修护双手细致肌肤，令双手柔软光滑，散发玫瑰细致而馥郁的清香。浓郁软滑的润手霜，散发奢华的玫瑰淡香氛香气，用后令双手宛如玫瑰花瓣般柔软芳香�?');
INSERT INTO `goods` VALUES ('19', 'Swisse 男士复合维生素片 120�?', '207.00', 'Swisse', '200.00', '31.05', 'AU$36.95', '../img/goods16.jpg', '1', '澳洲PO药品连锁�?', '澳洲直邮', 'Swisse Men\'s Ultivite Multi-Vitamin Tab X 120', '2018-02-08 15:20:24', 'Swisse 男士复合维生素片专为现代都市男性设计的配方，历�?5多年的全球性研究和临床认证，随科学发展进步不断更新制成。全面为男士提供每日所需的必须维生素、矿物质和草本元素，并特别添加抗老化元素。能有效抗疲劳，舒缓压力，改善男性生理机能，帮助男士每日维持生活与工作各方面达到生理和心理的最佳状态，轻松一片令您自信活力一整天�?\n温馨提示：本品为膳食补充剂（营养素补充剂），不能替代药物�?');
INSERT INTO `goods` VALUES ('20', '�?件包邮装】Blackmores 澳佳�?1500mg 维骨力关节灵 2*180�?�?', '360.00', 'Blackmores/澳佳�?', '1000.00', '54.00', 'AU$64.26', '../img/goods1.jpg', '1', '自营澳洲1号仓', '澳洲直邮', 'Blackmores Glucosamine Sulfate 1500mg', '2018-02-08 18:58:17', '这款澳佳宝维骨力主要成分为氨基葡萄糖，是形成软骨细胞的重要营养素。可以帮助修复和维护软骨，刺激软骨细胞生长。一天一粒，不过该产品取自甲壳类海洋生物，海鲜过敏者不能使用�?\n温馨提示：本品为膳食补充剂（营养素补充剂），不能替代药物�?');
INSERT INTO `goods` VALUES ('21', '�?件包邮装】Max Factor 蜜丝佛陀 水漾魔幻触感粉底�?2*11.5g/�?', '155.00', 'Max Factor/蜜丝佛陀', '200.00', '90.00', '¥2,430.00', '../img/product.jpg', '1', '自营香港2号仓', '香港直邮', null, '2018-02-08 15:33:06', '膏状的粉底，上妆自然服帖，遮瑕效果不错，用手指在粉底膏上打圈圈，会变为粉底液状，比一般的膏状粉底滋润，丝滑的感觉有别于一般的粉底膏�?这是一款最具遮�?修容/裸妆/完美妆容为一体，妆后效果薄透明亮、光滑柔嫩、饱满水嫩、细致平滑，清透，滋润有光泽。这是您打阿造自然光彩迷人的第一选择�?');
INSERT INTO `goods` VALUES ('22', '�?件包邮装】Bio Island 生物�?50000mg袋鼠精胶�?2*90�?', '239.00', 'Bio Island/生物�?', '550.00', '35.85', 'AU$42.66', '../img/fbaauspl.jpg', '1', '自营澳洲1号仓', '澳洲直邮', 'Bio Island Kangaroo Essence 50000mg 90C', '2018-02-08 18:58:56', 'Bio Island 袋鼠精胶囊，其主要成分为袋鼠粉，具有补肾强精，益气提神，全面调节内分泌平衡人体荷尔蒙，提高生理机能，强化微血管有效防止体内细胞器官的衰老恢复内脏器官达到最佳状态使人保持青春活力�?\n温馨提示：本品为膳食补充剂（营养素补充剂），不能替代药物�?');
INSERT INTO `goods` VALUES ('23', '�?件包邮装】Balea 芭乐�?玻尿酸橄榄油海藻保湿精华胶囊 5*7�?�?', '119.00', 'Balea/芭乐�?', '150.00', '35.70', '�?6.23', '../img/goods.jpg', '1', '自营荷兰1号仓', '荷兰直邮', 'Balea Ampullen Beauty Effect Lifting Kur, 5*7 ml', '2018-02-08 15:39:04', 'Balea 芭乐�?玻尿酸橄榄油海藻保湿精华胶囊富含橄榄油、绿藻精华和多种维他命等珍贵保湿成分。适合各种肤质，防止肌肤水分流失，调节肌肤水平衡。帮助肌肤防御外界环境的侵害，使护理后的肌肤柔韧有弹性，无紧绷感觉。不含防腐剂，人工香料和矿物油，纯天然使用安全放心�?');
INSERT INTO `goods` VALUES ('24', '【包邮装】AnneMarie Borlind 安娜柏林 橙花蜜原液精�?50ml', '179.00', 'AnneMarie Borlind/安娜柏林', '100.00', '90.00', '�?1.52', '../img/goods18.jpg', '1', '自营荷兰1号仓', '荷兰直邮', 'AnneMarie Borlind Orange Blossom Energy Booster 50 ml', '2018-02-08 15:42:09', 'AnneMarie Borlind 安娜柏林 橙花蜜原液精华拥有鲜活的2种混合原液，富含珍贵的低温萃取的植物油和精华原液，令肌肤再现紧致光滑，焕发活力。西西里岛有机血橙菁华富含油溶性维他命C和维他命B5，能抑制深黑色素并使转化为浅黑色素，扫除暗沉肤色、淡斑，使之净白。很好的抗氧化及保护作用，以防抗游离基侵害，延缓皮肤老化�?');
INSERT INTO `goods` VALUES ('25', '�?件包邮装】Hipp 喜宝 小鸭子无泪免敏宝宝洗�?洗脸�?3*250ml/�?', '129.00', 'Hipp/喜宝', '700.00', '38.70', '�?5.51', '../img/goods19.jpg', '1', '德国1号仓', '香港直邮', null, '2018-02-08 15:44:26', '外形为可爱的鸭子，采用压泵式设计，让儿童感到无比的有趣！特有的柔和成份让宝宝肌肤有效的清洁。且PH值为中性，通过皮肤科的专业测试�?');
INSERT INTO `goods` VALUES ('26', '【包邮装】Marvis 玛尔�?薄荷牙膏套装 3支（肉桂+美白+超强薄荷�?', '129.00', 'Marvis/玛尔�?', '330.00', '38.70', '�?5.66', '../img/goods21.jpg', '1', '自营荷兰1号仓', '荷兰直邮', null, '2018-02-08 15:50:53', 'Marvis 玛尔�?薄荷牙膏能解热镇痛、抗龋齿牙周炎，有助于预防龋齿、牙石和牙菌斑，提升牙齿珐琅质的保护力和抵抗力�?');
INSERT INTO `goods` VALUES ('27', '�?件包邮装】Femfresh 芳芯 女性私处私密护理液 4*250ml/瓶（止痒抑菌�?', '169.00', 'Femfresh/芳芯', '1200.00', '16.90', 'AU$26.60 ', '../img/goods22.jpg', '1', '自营澳洲1号仓', '澳洲直邮', 'Femfresh Intimate Wash 4 x 250ml', '2018-02-08 15:50:39', 'Femfresh 洗护液不同于普通肥皂及沐浴露，富含滋润成分及植物提取物�?洋甘菊芦�? 经典款，日常护理常备款， 很温和；如果无任何妇科炎症，正常健康的亲首选这款护理，富含有甘菊、芦荟以及叶鞘植物中的天然乳酸成分，其温和配方特别为女性设计，在保持自然酸?平衡的基础上清洁女性私密处，以帮助防止女性私密处炎症和感染。经英国专业的皮肤及妇科卫生组织测试，其温和配方适合每日使用�?');
INSERT INTO `goods` VALUES ('28', '【包邮装】Snurk 小公主全棉单人被罩枕�?150*200cm', '369.00', 'Snurk', '1090.00', '110.70', '�?4.36', '../img/goods23.jpg', '1', '自营荷兰1号仓', '欧洲直邮', 'Snurk Princess', '2018-02-08 15:54:24', '超柔软：棉花来自世界纯净的棉花产区；舒适柔软：直接接触，柔软舒适，不刺激；超透气：采用透气性极佳的工艺；手工制作：每一套都是艺术品；欧盟认证：经过严苛的质量认证。被�?1�?50*200cm、枕�?1�?0*80cm');
INSERT INTO `goods` VALUES ('29', '【包邮装】Brita 碧然�?金典系列 M系列滤水�?3.5L（蓝色）', '175.00', 'Brita/碧然�?', '3000.00', '52.50', '�?1.04', '../img/goods24.jpg', '1', '德国1号仓', '香港直邮', null, '2018-02-08 15:56:09', 'Brita Marella 碧然德滤水壶3.5�?蓝色，水是人体的重要组成部分，每天我们需要饮用大量的水来补充身体的需要，而最健康的饮品就是纯净的水，但前水质受到污染，即使满足卫生标准的饮用水，里面富含的多种漂白滤水成分不仅使水质口感不好，还会影响了大人、宝宝和老人的健康，此滤水壶主要用于使饮用水更清洁，口味更纯正，可用于厨房，可饮用水，烧菜，烧汤，洗涤，也可用于热饮机，咖啡机，关爱家人，从水开始，让我们的生活更健康！');
INSERT INTO `goods` VALUES ('30', '【包邮装】Fissler 菲仕�?平底不粘�?28cm', '398.00', 'Fissler/菲仕�?', '1300.00', '119.40', '�?7.84 ', '../img/goods25.jpg', '1', '德国2号仓', '	德国直邮', 'Fissler-Deutschland 28cm Antihaft', '2018-02-08 15:58:17', '锅里层，外层均为不粘涂层的设计，清洗易如反掌�?8cm超大直径�?cm内壁深度，实用的边缘突起令倾倒流畅不外漏。防烫把手绝热效果完美，丝毫感受不到锅的烫度。耐高温达400°，适合中国人的烹饪习惯。不会有任何刮痕，更不用像普通涂层平底锅担心掉涂层的问题。适合各种炉灶包括电磁炉，电陶炉。一锅三用，无论炒、煎、炸等手到擒来�?');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `phone` int(11) NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '23', 'd41d8cd98f00b204e9800998ecf8427e');
INSERT INTO `user` VALUES ('2', '123', '123');
INSERT INTO `user` VALUES ('3', '321', 'caf1a3dfb505ffed0d024130f58c5cfa');
INSERT INTO `user` VALUES ('4', '1234', '81dc9bdb52d04dc20036dbd8313ed055');
INSERT INTO `user` VALUES ('5', '12345', '827ccb0eea8a706c4c34a16891f84e7b');
INSERT INTO `user` VALUES ('7', '123456', 'e10adc3949ba59abbe56e057f20f883e');
SET FOREIGN_KEY_CHECKS=1;
