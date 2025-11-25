
import React, { useEffect, useMemo, useState, useCallback } from "react";
import { OfferCategory } from "@/entities/OfferCategory";
import { OfferService } from "@/entities/OfferService";
import { offersCategories } from "@/components/offers/offersData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Plus, Save, Trash2, Edit3, X, MoveVertical } from "lucide-react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import RichTextEditor from "@/components/common/RichTextEditor"; // Added import

function arrayMove(arr, from, to) {
  const copy = arr.slice();
  const [item] = copy.splice(from, 1);
  copy.splice(to, 0, item);
  return copy;
}

export default function OffersEditor() {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [servicesByCategory, setServicesByCategory] = useState({});
  const [importing, setImporting] = useState(false);
  const [seeding, setSeeding] = useState(false); // Added seeding state

  // Local editing states
  const [editingCategoryId, setEditingCategoryId] = useState(null);
  const [editingServiceId, setEditingServiceId] = useState(null);
  const [categoryDrafts, setCategoryDrafts] = useState({});
  const [serviceDrafts, setServiceDrafts] = useState({}); // key by service.id

  const loadData = useCallback(async () => {
    setLoading(true);
    const cats = await OfferCategory.list("order");
    const svcs = await OfferService.list("order");
    const grouped = svcs.reduce((acc, s) => {
      const k = s.category_key || "_";
      if (!acc[k]) acc[k] = [];
      acc[k].push(s);
      return acc;
    }, {});
    // Ensure array for each category key
    const groupedWithEmpties = {};
    cats.forEach(c => {
      groupedWithEmpties[c.key] = (grouped[c.key] || []).sort((a,b) => (a.order ?? 0) - (b.order ?? 0));
    });

    setCategories(cats.sort((a,b) => (a.order ?? 0) - (b.order ?? 0)));
    setServicesByCategory(groupedWithEmpties);
    setLoading(false);
  }, []);

  useEffect(() => { loadData(); }, [loadData]);

  const hasDbData = useMemo(() => categories.length > 0, [categories.length]);

  // One-click import from static offersData.js
  const handleImport = async () => {
    setImporting(true);
    // Import categories
    const catRecords = offersCategories.map((c, idx) => ({
      key: c.key,
      title: c.title,
      intro: c.intro || "",
      order: idx
    }));
    if (catRecords.length) {
      await OfferCategory.bulkCreate(catRecords);
    }
    // Import services
    const svcRecords = [];
    offersCategories.forEach((c) => {
      (c.services || []).forEach((s, idx) => {
        svcRecords.push({
          category_key: c.key,
          title: s.display_title || s.title || "Untitled",
          intro: s.intro || "",
          description: s.description || "",
          for: s.for || "",
          deliverable: s.deliverable || "",
          order: idx
        });
      });
    });
    if (svcRecords.length) {
      await OfferService.bulkCreate(svcRecords);
    }
    setImporting(false);
    await loadData();
  };

  // Added addFiveTemplate function
  const addFiveTemplate = async () => {
    setSeeding(true);
    // Define 5 categories with HTML-capable intros
    const cats = [
      {
        key: "strategy_readiness",
        title: "Strategy & Readiness for AI",
        intro: `
          <p>Before diving in, many organizations are trying to make sense of where AI fits, what’s realistic, and how to lead the change.</p>
          <ul>
            <li>“Are we truly ready, or will a major investment fail? Where are our biggest risks and easiest wins?”</li>
            <li>“How do I create a real strategy for this, not just a list of random experiments?”</li>
            <li>“How do I empower my team to use these tools without creating security risks or strategic chaos?”</li>
          </ul>
        `,
      },
      {
        key: "opportunities_use_cases",
        title: "Identifying Opportunities & Defining Use Cases",
        intro: `
          <p>Once leaders are ready to act, the next challenge is knowing where AI will make the biggest difference.</p>
          <ul>
            <li>“Where should we start without wasting money and resources on the wrong initiatives?”</li>
            <li>“How do we turn ideas into something testable and real?”</li>
            <li>“Which of our pain points are best suited for AI-enabled solutions?”</li>
          </ul>
        `,
      },
      {
        key: "accelerating_functions",
        title: "Accelerating Business Functions",
        intro: `
          <p>For many teams, the pressure is on to deliver measurable results fast—AI can help unlock new performance levels.</p>
          <ul>
            <li>“How can my team find better leads and spend less time on admin work?”</li>
            <li>“Why are experts still stuck doing manual reports and data entry?”</li>
            <li>“How can we improve response time and accuracy in customer service?”</li>
          </ul>
        `,
      },
      {
        key: "skilled_confident_team",
        title: "Building a Skilled & Confident Team",
        intro: `
          <p>True transformation happens when people feel capable and confident—not when technology leads the way alone.</p>
          <ul>
            <li>“How do I get my teams to understand and use AI effectively?”</li>
            <li>“What skills do people actually need—not generic training?”</li>
            <li>“How do we make AI adoption exciting, not intimidating?”</li>
          </ul>
        `,
      },
      {
        key: "advisory_innovation",
        title: "Ongoing Advisory & Innovation",
        intro: `
          <p>Innovation doesn’t stop once systems are running—leaders want to stay curious, current, and creatively ahead.</p>
          <ul>
            <li>“How do we keep up with the fast-changing AI landscape?”</li>
            <li>“Who can I trust for unbiased, practical advice on tools and vendors?”</li>
            <li>“How can we explore bold ideas without disrupting our core business?”</li>
          </ul>
        `,
      },
    ].map((c, idx) => ({ ...c, order: idx }));

    await OfferCategory.bulkCreate(cats);

    const svc = [];
    // Cat 1 services
    svc.push(
      {
        category_key: "strategy_readiness",
        title: "Strategy & Roadmap Development",
        description: `
          <p>We define a clear path aligning AI with business goals.</p>
          <ul><li>6–12 month roadmap</li><li>Ownership framework</li><li>ROI projection</li></ul>
        `,
        order: 0
      },
      {
        category_key: "strategy_readiness",
        title: "Business Readiness Assessment",
        description: `
          <p>We identify your best starting points.</p>
          <ul><li>Team readiness</li><li>Tech gaps</li><li>Key risks</li></ul>
        `,
        order: 1
      },
      {
        category_key: "strategy_readiness",
        title: "Governance & Risk Frameworks",
        description: `
          <p>We create simple policies for safe, effective AI use.</p>
          <ul><li>AI usage rules</li><li>Data security protocols</li><li>GDPR compliance</li></ul>
        `,
        order: 2
      }
    );
    // Cat 2 services
    svc.push(
      {
        category_key: "opportunities_use_cases",
        title: "As‑Is Analysis",
        description: `
          <p>We map what works and what doesn’t within selected teams/functions, using existing data as the baseline.</p>
        `,
        order: 0
      },
      {
        category_key: "opportunities_use_cases",
        title: "High‑Impact Opportunities & Use Cases",
        description: `
          <p>We find and prioritize where AI can create the biggest business value.</p>
          <ul><li>Top 3–5 use cases per department</li><li>Clear business cases</li><li>Prototypes ready to test</li></ul>
        `,
        order: 1
      }
    );
    // Cat 3 services
    svc.push(
      {
        category_key: "accelerating_functions",
        title: "Winning More Business",
        description: `
          <p>Smarter lead generation and better communication.</p>
          <ul><li>Automated tender monitoring</li><li>Customer intelligence systems</li><li>Personalized marketing engines</li></ul>
        `,
        order: 0
      },
      {
        category_key: "accelerating_functions",
        title: "Boosting Efficiency",
        description: `
          <p>Identify workflows to automate and extract insights across functions.</p>
          <ul><li>Financial reporting automation</li><li>Meeting intelligence tools</li><li>Interactive BI dashboards</li></ul>
        `,
        order: 1
      }
    );
    // Cat 4 services
    svc.push(
      {
        category_key: "skilled_confident_team",
        title: "Leadership & Board Workshops",
        description: `
          <p>Build a shared understanding of AI’s opportunities and risks.</p>
          <ul><li>C‑suite strategy sessions</li><li>Leadership training for evaluating AI initiatives</li></ul>
        `,
        order: 0
      },
      {
        category_key: "skilled_confident_team",
        title: "Practical Employee Training",
        description: `
          <p>Hands‑on sessions to give teams confidence.</p>
          <ul><li>Custom modules for each department</li><li>Company‑wide “AI for Everyone” programs</li></ul>
        `,
        order: 1
      }
    );
    // Cat 5 services
    svc.push(
      {
        category_key: "advisory_innovation",
        title: "Strategic Advisory Retainer",
        description: `
          <p>Flexible support for ongoing guidance and vendor evaluation.</p>
          <ul><li>Quarterly reviews</li><li>Unbiased vendor assessments</li></ul>
        `,
        order: 0
      },
      {
        category_key: "advisory_innovation",
        title: "Innovation Sprints",
        description: `
          <p>Fast, creative workshops to explore and test new ideas.</p>
          <ul><li>Discover new revenue streams</li><li>Build product prototypes in a week</li></ul>
        `,
        order: 1
      }
    );

    await OfferService.bulkCreate(svc);
    setSeeding(false);
    await loadData();
  };

  // Category CRUD
  const startEditCategory = (cat) => {
    setEditingCategoryId(cat.id);
    setCategoryDrafts((d) => ({
      ...d,
      [cat.id]: { title: cat.title || "", intro: cat.intro || "" }
    }));
  };
  const cancelEditCategory = () => setEditingCategoryId(null);
  const saveCategory = async (cat) => {
    const draft = categoryDrafts[cat.id] || {};
    await OfferCategory.update(cat.id, { ...cat, title: draft.title, intro: draft.intro });
    setEditingCategoryId(null);
    await loadData();
  };
  const addCategory = async () => {
    const order = categories.length;
    const newCat = await OfferCategory.create({ key: `cat_${Date.now()}`, title: "New Category", intro: "", order });
    await loadData();
    startEditCategory(newCat);
  };
  const deleteCategory = async (cat) => {
    // Delete services under it first
    const svcs = servicesByCategory[cat.key] || [];
    for (const s of svcs) {
      await OfferService.delete(s.id);
    }
    await OfferCategory.delete(cat.id);
    await loadData();
  };

  // Service CRUD
  const startEditService = (svc) => {
    setEditingServiceId(svc.id);
    setServiceDrafts((d) => ({
      ...d,
      [svc.id]: {
        title: svc.title || "",
        intro: svc.intro || "",
        description: svc.description || "",
        for: svc.for || "",
        deliverable: svc.deliverable || ""
      }
    }));
  };
  const cancelEditService = () => setEditingServiceId(null);
  const saveService = async (svc) => {
    const draft = serviceDrafts[svc.id] || {};
    await OfferService.update(svc.id, { ...svc, ...draft });
    setEditingServiceId(null);
    await loadData();
  };
  const addService = async (categoryKey) => {
    const list = servicesByCategory[categoryKey] || [];
    const order = list.length;
    await OfferService.create({
      category_key: categoryKey,
      title: "New Service",
      intro: "",
      description: "",
      for: "",
      deliverable: "",
      order
    });
    await loadData();
  };
  const deleteService = async (svc) => {
    await OfferService.delete(svc.id);
    await loadData();
  };

  // Drag & Drop
  const onDragEnd = async (result) => {
    const { destination, source, draggableId, type } = result;
    if (!destination) return;

    if (type === "CATEGORY") {
      if (destination.index === source.index) return;
      const newCats = arrayMove(categories, source.index, destination.index).map((c, idx) => ({ ...c, order: idx }));
      setCategories(newCats);
      // Persist orders
      for (const c of newCats) {
        await OfferCategory.update(c.id, { order: c.order });
      }
      return;
    }

    // Services reordering/moving
    const srcCatKey = source.droppableId.replace("services-", "");
    const dstCatKey = destination.droppableId.replace("services-", "");
    if (!servicesByCategory[srcCatKey]) return;

    // Clone lists
    const srcList = Array.from(servicesByCategory[srcCatKey] || []);
    const dstList = srcCatKey === dstCatKey ? srcList : Array.from(servicesByCategory[dstCatKey] || []);

    const [moved] = srcList.splice(source.index, 1);
    const updatedMoved = { ...moved, category_key: dstCatKey };
    dstList.splice(destination.index, 0, updatedMoved);

    const newMap = { ...servicesByCategory, [srcCatKey]: srcList, [dstCatKey]: dstList };
    setServicesByCategory(newMap);

    // Persist changes
    // If moved across categories, update category_key first
    if (srcCatKey !== dstCatKey) {
      await OfferService.update(moved.id, { category_key: dstCatKey });
    }
    // Update orders for both lists
    const persistOrder = async (list, key) => {
      for (let i = 0; i < list.length; i++) {
        const s = list[i];
        await OfferService.update(s.id, { order: i });
      }
    };
    await persistOrder(newMap[srcCatKey], srcCatKey);
    await persistOrder(newMap[dstCatKey], dstCatKey);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900" style={{ fontFamily: "Noto Serif Display, serif" }}>
          Offers Editor
        </h1>
        <div className="flex gap-2">
          {/* Added 5-Category Template button */}
          <Button variant="outline" onClick={addFiveTemplate} disabled={seeding}>
            {seeding ? "Seeding 5-Category Template…" : "Add 5-Category Template"}
          </Button>
          <Button variant="outline" onClick={loadData}>Reload</Button>
          <Button onClick={addCategory}><Plus className="w-4 h-4 mr-1" /> New Category</Button>
        </div>
      </div>

      {!hasDbData && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Import current Offers into the editor</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-700 mb-3">
              No categories found in the database. Click the button below to import the current Offers content so you can edit it here.
            </p>
            <Button onClick={handleImport} disabled={importing}>
              {importing ? "Importing…" : "Import from current Offers"}
            </Button>
          </CardContent>
        </Card>
      )}

      {loading ? (
        <div className="text-gray-600">Loading…</div>
      ) : (
        <DragDropContext onDragEnd={onDragEnd}>
          {/* Categories list */}
          <Droppable droppableId="categories" type="CATEGORY">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps} className="space-y-6">
                {categories.map((cat, idx) => (
                  <Draggable draggableId={`cat-${cat.id}`} index={idx} key={cat.id}>
                    {(dragProvided) => (
                      <div
                        ref={dragProvided.innerRef}
                        {...dragProvided.draggableProps}
                        className="border-2 border-black bg-white"
                      >
                        <div className="flex items-center justify-between p-4 border-b">
                          <div className="flex items-center gap-3">
                            <span {...dragProvided.dragHandleProps} className="cursor-grab text-gray-500">
                              <MoveVertical className="w-4 h-4" />
                            </span>
                            {editingCategoryId === cat.id ? (
                              <Input
                                value={categoryDrafts[cat.id]?.title || ""}
                                onChange={(e) =>
                                  setCategoryDrafts((d) => ({ ...d, [cat.id]: { ...d[cat.id], title: e.target.value } }))
                                }
                                className="w-72"
                              />
                            ) : (
                              <h2 className="text-xl font-semibold text-gray-900" style={{ fontFamily: "Noto Serif Display, serif" }}>
                                {cat.title || "(Untitled category)"}
                              </h2>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            {editingCategoryId === cat.id ? (
                              <>
                                <Button size="sm" onClick={() => saveCategory(cat)}><Save className="w-4 h-4 mr-1" />Save</Button>
                                <Button size="sm" variant="outline" onClick={cancelEditCategory}><X className="w-4 h-4 mr-1" />Cancel</Button>
                              </>
                            ) : (
                              <>
                                <Button size="sm" variant="outline" onClick={() => startEditCategory(cat)}><Edit3 className="w-4 h-4 mr-1" />Edit</Button>
                                <Button size="sm" variant="destructive" onClick={() => deleteCategory(cat)}><Trash2 className="w-4 h-4 mr-1" />Delete</Button>
                              </>
                            )}
                          </div>
                        </div>

                        {/* Category intro editor (now RichTextEditor) */}
                        <div className="p-4">
                          {editingCategoryId === cat.id ? (
                            <RichTextEditor
                              value={categoryDrafts[cat.id]?.intro || ""}
                              onChange={(html) =>
                                setCategoryDrafts((d) => ({ ...d, [cat.id]: { ...d[cat.id], intro: html } }))
                              }
                              placeholder="Category intro (supports bullet lists)"
                            />
                          ) : (
                            <>
                              {cat.intro ? (
                                // Check if intro contains HTML tags to render appropriately
                                /<\s*\w+.*?>/i.test(cat.intro) ? (
                                  <div
                                    className="prose prose-sm max-w-none text-gray-800 [&_ul]:list-disc [&_ul]:pl-5"
                                    dangerouslySetInnerHTML={{ __html: cat.intro }}
                                  />
                                ) : (
                                  <p className="text-sm text-gray-700">{cat.intro}</p>
                                )
                              ) : (
                                <span className="text-gray-400 text-sm">No intro yet.</span>
                              )}
                            </>
                          )}
                        </div>

                        <Separator />

                        {/* Services within category */}
                        <div className="p-4">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="font-semibold">Services in this category</h3>
                            <Button size="sm" onClick={() => addService(cat.key)}><Plus className="w-4 h-4 mr-1" />Add Service</Button>
                          </div>

                          <Droppable droppableId={`services-${cat.key}`} type="SERVICE">
                            {(sProvided) => (
                              <div ref={sProvided.innerRef} {...sProvided.droppableProps} className="space-y-3">
                                {(servicesByCategory[cat.key] || []).map((svc, sidx) => (
                                  <Draggable draggableId={`svc-${svc.id}`} index={sidx} key={svc.id}>
                                    {(svDrag) => (
                                      <div
                                        ref={svDrag.innerRef}
                                        {...svDrag.draggableProps}
                                        className="border border-gray-300 p-3 bg-white"
                                      >
                                        <div className="flex items-start gap-3">
                                          <span {...svDrag.dragHandleProps} className="cursor-grab text-gray-400 pt-1">
                                            <MoveVertical className="w-4 h-4" />
                                          </span>
                                          <div className="flex-1">
                                            {editingServiceId === svc.id ? (
                                              <>
                                                <Input
                                                  value={serviceDrafts[svc.id]?.title || ""}
                                                  onChange={(e) =>
                                                    setServiceDrafts((d) => ({
                                                      ...d,
                                                      [svc.id]: { ...d[svc.id], title: e.target.value }
                                                    }))
                                                  }
                                                  className="mb-2"
                                                  placeholder="Service title"
                                                />
                                                <Textarea // Intro remains a Textarea as per instruction
                                                  value={serviceDrafts[svc.id]?.intro || ""}
                                                  onChange={(e) =>
                                                    setServiceDrafts((d) => ({
                                                      ...d,
                                                      [svc.id]: { ...d[svc.id], intro: e.target.value }
                                                    }))
                                                  }
                                                  className="mb-2"
                                                  placeholder="Short intro"
                                                />
                                                <RichTextEditor // Description is now RichTextEditor
                                                  value={serviceDrafts[svc.id]?.description || ""}
                                                  onChange={(html) =>
                                                    setServiceDrafts((d) => ({
                                                      ...d,
                                                      [svc.id]: { ...d[svc.id], description: html }
                                                    }))
                                                  }
                                                  className="mb-2"
                                                  placeholder="Description (supports bullet lists)"
                                                />
                                                <div className="grid md:grid-cols-2 gap-2">
                                                  <Input
                                                    value={serviceDrafts[svc.id]?.for || ""}
                                                    onChange={(e) =>
                                                      setServiceDrafts((d) => ({
                                                        ...d,
                                                        [svc.id]: { ...d[svc.id], for: e.target.value }
                                                      }))
                                                    }
                                                    placeholder='For (e.g. "Leaders needing…")'
                                                  />
                                                  <Input
                                                    value={serviceDrafts[svc.id]?.deliverable || ""}
                                                    onChange={(e) =>
                                                      setServiceDrafts((d) => ({
                                                        ...d,
                                                        [svc.id]: { ...d[svc.id], deliverable: e.target.value }
                                                      }))
                                                    }
                                                    placeholder='Deliverable (e.g. "Roadmap…")'
                                                  />
                                                </div>
                                              </>
                                            ) : (
                                              <>
                                                <div className="font-semibold">{svc.title || "(Untitled service)"}</div>
                                                {svc.intro && <div className="text-sm text-gray-700">{svc.intro}</div>}
                                                {svc.description && (
                                                  // Check if description contains HTML tags to render appropriately
                                                  /<\s*\w+.*?>/i.test(svc.description) ? (
                                                    <div
                                                      className="prose prose-sm max-w-none text-gray-700 mt-1 [&_ul]:list-disc [&_ul]:pl-5"
                                                      dangerouslySetInnerHTML={{ __html: svc.description }}
                                                    />
                                                  ) : (
                                                    <div className="text-sm text-gray-600 mt-1">{svc.description}</div>
                                                  )
                                                )}
                                                <div className="text-xs text-gray-500 mt-1">
                                                  {svc.for && <span><strong>For:</strong> {svc.for} • </span>}
                                                  {svc.deliverable && <span><strong>Deliverable:</strong> {svc.deliverable}</span>}
                                                </div>
                                              </>
                                            )}
                                          </div>
                                          <div className="flex flex-col gap-2">
                                            {editingServiceId === svc.id ? (
                                              <>
                                                <Button size="sm" onClick={() => saveService(svc)}><Save className="w-4 h-4 mr-1" />Save</Button>
                                                <Button size="sm" variant="outline" onClick={cancelEditService}><X className="w-4 h-4 mr-1" />Cancel</Button>
                                              </>
                                            ) : (
                                              <>
                                                <Button size="sm" variant="outline" onClick={() => startEditService(svc)}><Edit3 className="w-4 h-4 mr-1" />Edit</Button>
                                                <Button size="sm" variant="destructive" onClick={() => deleteService(svc)}><Trash2 className="w-4 h-4 mr-1" />Delete</Button>
                                              </>
                                            )}
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                  </Draggable>
                                ))}
                                {sProvided.placeholder}
                              </div>
                            )}
                          </Droppable>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      )}
    </div>
  );
}
